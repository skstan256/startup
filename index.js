const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const db = require('./database.js');

const authCookieName = 'token';

// can set up service port on command line
const port = process.argv.length > 2 ? process.argv[2] : 3000;


//app.get('/*', (req, res) => {
    //res.send({ url: req.originalUrl });
  //});
 

// JSON body parsing
app.use(express.json());

// use cookies for authentication
app.use(cookieParser());

// serve up front end static content hosting
app.use(express.static('public'));

// trust headers that are forwarded from proxy -- allows you to determine IP address
app.set('trust proxy', true);

// router for service endpoints
var apiRouter = express.Router();
app.use('/api', apiRouter);

// make auth token for new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await db.getUser(req.body.username)) {
    res.status(409).send({msg: 'Existing user'});
  }
  else {
    const user = await db.createUser(req.body.username, req.body.password);
    // set cookie
    setAuthCookie(res, user.token);
    res.send({id: user._id});
    return;
  }
});

// make auth token for existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await db.getUser(req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({id: user._id});
      return;
    }
  }
  res.status(401).send({msg: 'Invalid Credentials'});
});

// delete auth token upon logging out
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// return information about a user (?)
apiRouter.get('/user/:username', async (req, res) => {
  const user = await db.getUser(req.params.username);
  if (user) {
    const token = req?.cookies.token;
    res.send({username: user.username, authenticated: token === user.token});
    return;
  }
  res.status(404).send({msg: 'Unknown'});
});



// secureApiRouter that verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);
secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await db.getUserByToken(authToken);
  if (user) {
    next();
  }
  else {
    res.status(401).send({msg: 'Unauthorized'});
  }
});

// default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// go to default page if path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', {root: 'public'});
});

// set flags on auth token
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// getUserProjects
secureApiRouter.get('/home/projects', async (req, res) => {
  authToken = req.cookies[authCookieName];
  if (authToken) {
    const projectDisplays = await db.getUserProjects(authToken);
    // YOU ARE HERE: STRINGIFY PROJECT DISPLAYS?
    res.send({projectDisplays: projectDisplays});
    console.log('Sent User Projects');
  }
  else {
    res.status(401).send({msg: 'Unauthorized'});
  }
  
});

// createProject
secureApiRouter.post('/home/create', async (req, res) => {
  const projectName = req.body.projectName;
  authToken = req.cookies[authCookieName];
  const projectID = await db.createProject(authToken, projectName);
});

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
    });