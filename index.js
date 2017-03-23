/*
 * bez EXPRESS
 */
// var http = require('http');
// var server = http.createServer(function (req, res) {
//   res.end('hello world');
// });
// server.listen(3000, function () {
//   console.log("When this callback is invoked our server is listening on port: " + 3000);
// });

/*
 * z EXPRESS
 */
var express = require('express');
var app = express();

function logRequest(req, res, next) {
    console.log('incoming request at ', new Date());
    next();
};

app.use(logRequest);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});