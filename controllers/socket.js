// import todoRoutes from './chatroom';
// import todoController from './chatroom';
const todoController = require('./chatroom')

// require('socket.io')(server)

function respondRoute(socket) {


    // socket.on('chat message', function (msg) {
    //     console.log('message: ' + msg);
    //     io.emit('chat message', msg.message)

    // });


    socket.on('chat message', function (msg) {
        // global.tesio.emit('chat message', msg.message)
        todoController.testing(msg)

    })
    // io.on('chat message', function (msg) {
    //     // console.log(msg.message)
    //     // todoController.testing(io, msg)
    //     // io.emit('chat message', msg.message)
    //     io.emit('chat message', msg.message)

    //     // socket.on('chat message', function (msg) {
    //     //     console.log('message: ' + msg);
    //     //     io.emit('chat message', msg.message)

    //     // });
    // });
}


module.exports = {
    respond: respondRoute
}