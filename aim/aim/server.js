var express = require('express');

var app = express();
app.use('/public', express.static('public'));

var http = require('http').Server(app);
var io = require('socket.io')(http);

// set up root route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// set up socket connection
io.on('connection', function (socket) {
  console.log('Someone connected...');

  socket.on('disconnect', function() {
    console.log('Someone disconnected');
    socket.broadcast.emit('disconnected user');
  });

  socket.on('new message', function(msg) {
    socket.broadcast.emit('chat message', msg);
  })
});

// setup http server listening on port 3000
http.listen(3000, function () {
  var host = http.address().address;
  var port = http.address().port;

  console.log('Listening on *:3000');
});