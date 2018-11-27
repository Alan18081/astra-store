const io = require('socket.io-client');

const client = io('http://localhost:3000/messages',
	{ query: {
		token: 'some token'
	} }
);

client.emit('ADD_USER', {
	chatId: 1
});

client.emit('ADD_MESSAGE', {
	text: 'Alan',
	authorId: 1,
	chatId: 1
});

client.on('ADD_MESSAGE', message => {
	console.log(message);
});



