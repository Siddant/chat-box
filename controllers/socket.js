const todoController = require('./chatroom')
function respondRoute(socket) {
    // console.log(socket.id)
    socket.on('chat message', function (msg) {
        todoController.testing(msg)
    })
}


module.exports = {
    respond: respondRoute
}