var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.end('Hello World');
}).listen(8888, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8888/');