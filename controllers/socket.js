// import todoRoutes from './chatroom';
// import todoController from './chatroom';
const todoController = require('./chatroom')

// require('socket.io')(server)

function respondRoute(socket) {
    socket.on('chat message', function (msg) {
        global.tesio.emit('chat message', msg.message)
    })
}


module.exports = {
    respond: respondRoute
}