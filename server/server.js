const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

// const timeStamp = new Date().getTime();

io.on('connection', (socket) => {
  console.log('New user connected.');

  socket.emit('newMessage', {
    from: 'Mike',
    text: 'Hey. What is going on?',
    createdAt: new Date().getTime()
  });

  socket.on('createMessage', (message) => {
    console.log('create message', message);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});


server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
