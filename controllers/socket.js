// import todoRoutes from './chatroom';
// import todoController from './chatroom';
const todoController = require('./chatroom')

// require('socket.io')(server)

function respondRoute(io) {
    io.on('chat message', function (msg) {
        // console.log(msg.message)
        todoController.testing()

        // io.emit('chat message', msg.message);
    });

}


module.exports = {
    respond: respondRoute
}