const express = require('express')
const app = express()
const http = require('http').createServer(app);

const io = require('socket.io')(http)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});


// app.listen(4000, () => console.log('express is running on port 4000'))

http.listen(4000, function () {
    console.log('listening on *:3000');
});
