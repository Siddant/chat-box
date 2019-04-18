const express = require('express');
const router = require('express').Router()


function respondRoute(io) {
    io.on('chat message', function (msg) {
        // console.log(msg.message)


        router.get('/api/hi', (req, res) => {
            console.log('here')
        });


        io.emit('chat message', msg.message);
    });

}


module.exports = {
    respond: respondRoute
}