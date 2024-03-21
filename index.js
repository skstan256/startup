const express = require('express');
const app = express();




//app.get('/*', (req, res) => {
    //res.send({ url: req.originalUrl });
  //});
 

// JSON body parsing
app.use(express.json());

// serve up front end static content hosting
app.use(express.static('public'));



// go to default page if path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', {root: 'public'});
});

const port = 3000;
app.listen(port, function () {
    console.log(`Listening on port ${port}`);
    });