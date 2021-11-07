// Faça seu código aqui
const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const chatController = require('./controller/chatController');

app.use(cors());

const onlineUsers = [];
const date = new Date().toLocaleString().replace(/\//g, '-');

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    const userIndex = onlineUsers.findIndex((user) => user.id === socket.id);
    onlineUsers.splice(userIndex, 1);
    io.emit('userDisconnected', onlineUsers);
  });
  socket.on('message', async (msg) => {
    await chatController.createMessage(msg.chatMessage, msg.nickname, date);
    io.emit('message', `${date} - ${msg.nickname}: ${msg.chatMessage}`);
  });
  socket.on('nickname', (nickname) => {
    onlineUsers.push({ nickname, id: socket.id });
    io.emit('onlineUsers', onlineUsers);
  });
  socket.on('updateNickname', (newNick, oldNick) => {
    const userIndex = onlineUsers.findIndex((user) => user.nickname === oldNick);
    onlineUsers.splice(userIndex, 1, { nickname: newNick, id: socket.id });
    io.emit('newNick', onlineUsers);
  });
});

io.on('connection', (socket) => {
  socket.on('messagesHistory', async () => {
    const messages = await chatController.getAllMessages();
    socket.emit('messagesHistory', messages);
  });
});

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/messages', async (req, res) => {
  const messages = await chatController.getAllMessages();
  res.status(200).json(messages);
});

http.listen(3000, () => {
  console.log('rodando na 3000');
});