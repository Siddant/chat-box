const todoController = require('./chatroom')
function respondRoute(socket) {
    socket.on('chat message', function (msg) {
        todoController.testing(msg)
    })
}


module.exports = {
    respond: respondRoute
}