const express = require('express');
const app = express();

//app.get('/*', (req, res) => {
    //res.send({ url: req.originalUrl });
  //});
  
const port = 3000;
app.listen(port, function () {
    console.log(`Listening on port ${port}`);
    });