const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const http = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const authRouter = require('./routes/authRoutes');
app.use('/v1/auth', authRouter);

const chatUserRouter = require('./routes/chatMessageRoutes');
app.use('/v1', chatUserRouter);

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000',
    }
});

const users = [];



socketIO.on('connection', (socket) => {
    console.log(`${socket.id} user connected`);

    socket.on('newUser', (data) => {
        users.push(data);
        socketIO.emit('responseNewUser', users)
    });

    socket.on('message', (data) => {
        socketIO.emit('response', data);
    });

    socket.on('startTyping', (data) => socket.broadcast.emit('responseTyping', data));
    socket.on('stopTyping', (data) => socket.broadcast.emit('responseTyping', data));

    socket.on('disconnect', () => {
        console.log(`${socket.id} user disconnected`)
    })
})

const start = () => {
    try {
        http.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log()
    }
}

start();

