const {WebSocketServer} = require('ws');
const uuid = require('uuid');
const connections = [];

// TODO: FIGURE OUT HAVING THIS ASYNC BREAKS ANYTHING
function webSocketConn(httpServer) {
    // Create websocket object
    const wss = new WebSocketServer({noServer: true});

    // Handle protocol upgrade from HTTP to WebSocket
    httpServer.on('upgrade', (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request);
        });
    });

    // Keep track of connections
    //let connections = [];

    wss.on('connection', (ws) => {
        const connection = { id: uuid.v4(), alive: true, ws:ws};
        connections.push(connection);

        // send api thing here?

        // Remove closed connections
        ws.on('close', () => {
            connections.findIndex((o, i) => {
                if (o.id === connection.id) {
                    connections.splice(i, 1);
                    return true;
                }
            });
        });

        // PONG... I'm alive
        ws.on('pong', () => {
            connection.alive = true;
        });
    });

    // Keep active connections alive
    setInterval(() => {
        connections.forEach((c) => {
            // Kill connections that don't respond to ping
            if (!c.alive) {
                c.ws.terminate();
            }
            else {
                c.alive = false;
                c.ws.ping();
            }
        });
    }, 10000);

    // send quote
    setInterval(async () => {
        console.log('Getting quote...')
        const response = await fetch('https://zenquotes.io/api/random');
        const data = await response.json();
        const msg = data[0].q + '\n - ' + data[0].a;

        connections.forEach((c) => {
            c.ws.send(msg);
        });
    }, 30000);
    
}



module.exports = {webSocketConn};


