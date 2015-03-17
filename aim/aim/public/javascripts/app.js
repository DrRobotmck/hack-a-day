window.onload = function () {
		var button = document.getElementById('enter');
		var nameButton = document.getElementById('enter-name');
		button.addEventListener('click', submitText);
		nameButton.addEventListener('click', function(e) {
			e.preventDefault();
			var name = document.getElementById('name').value;
			myClient = new Client(name);
			document.getElementById('chat').style.display = 'block';
			this.parentNode.style.display = 'none';
		});

		socket.on('chat message', messageHandler);
  };

var myClient;
var messageHandler = function (message) {
	var chat = document.getElementById('chat-box');
	chat.innerText += '\n' + message.name + ' says... ' + message.msg;
};

var submitText = function () {
	var userText = document.getElementById('input-box').value;
	var message = {name: myClient.name, msg: userText};
	socket.emit('new message', message);
	messageHandler(message);
};
