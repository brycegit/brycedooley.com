const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const fs = require('fs');

const PORT = process.env.PORT || 5000;

if (cluster.isMaster) {

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  app.use(express.static(path.join(__dirname, '/dist'), {
    extensions: ['html']
  }));

  // app.get('/', function(req, res) {
  //   res.sendFile(path.join(__dirname + '/dist'));
  // });


  // app.get('*', function (req, res) {}

  app.get('*', function (req, res) {
    // let thing = 0;
    // console.log('num is ', thing);
    // thing++;
    // console.log(req.query, req.query, req.headers, req.originalUrl)
    const pathSections = req.originalUrl.split('/');
    // setTimeout(() => {
    //   res.sendFile(pathSections[pathSections.length - 1], { root: path.join(__dirname, '/dist') })
    // }, 5000);
    res.sendFile(pathSections[pathSections.length - 1], { root: path.join(__dirname, '/dist') })
  });

  app.listen(PORT);
}
