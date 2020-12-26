const http = require('http');
var mongoose = require('mongoose')
var express = require('express')
var bodyParser = require('body-parser')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
mongoose.connect('mongodb://localhost/vehicle-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});