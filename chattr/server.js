var express, app, http, io;

express = require('express');
app = express();
http = require('http').Server(app);
io = require('socket.io')(http);

// include assets folders
app.use('/public', express.static('public'));

// Define root route
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function () {
	console.log('Chattering on port 3000!');
});