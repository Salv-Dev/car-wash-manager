const express = require('express');
const app = express();
const server = require('http').createServer(app);
global.io = require('socket.io')(server);
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', routes);

io.on('connection', (socket) => {
    console.log(' A new client connected: ' + socket.id);
    socket.on('disconnect', () => {
        console.log('user ' + socket.id + ' disconnected');
    })
})

server.listen(4000, () => console.log('API is running!'));
