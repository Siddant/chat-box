// import todoRoutes from './chatroom';
// import todoController from './chatroom';
const todoController = require('./chatroom')

// require('socket.io')(server)

function respondRoute(io) {
    io.on('send message', function (msg) {
        // console.log(msg.message)
        todoController.testing(io, msg)
    });
}


module.exports = {
    respond: respondRoute
}