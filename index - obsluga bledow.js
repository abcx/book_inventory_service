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
}

function auth(req, res, next) {
    console.log('you can pass my auth');
    next();
}

// ustalenie kolejnosci middleware dla app.get
app.use(logRequest);
app.use(auth);

app.get('/', function (req, res) {
    res.send('Hello World!');
});
// app.get('/', [logRequest, auth], function (req, res) { // ustawienie konkretnych middleware dla app.get
//     res.send('Hello World!');
// });

app.get('/error', function(req, res) {
    throw new Error('forced error');
});

// obsluga bledow po wszystkich app.use
app.use(clientError);
app.use(serverError);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

function clientError(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404; // ustaw status bledu
    next(err); // przekaz do serverError
}

function serverError(err, req, res, next) {
    var status = err.status || 500;
    res.status(status);
    console.error(err.stack);
    res.send('Oh no: '+ status);
}