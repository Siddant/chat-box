require('dotenv').config()

const express = require('express')
const app = express()
// const http = require('http').createServer(app);
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect(process.env.MONGODB_URI)



const routes = require('./config/routes')

app.use(bodyParser.json())
app.use('/api', routes)

// app.use('/*', (req, res) => res.sendFile(`${__dirname}/index.html`))

// let serve = app.listen(process.env.PORT || 4000, () => console.log(`express is running on port ${process.env.PORT || 4000}`))

app.listen(process.env.PORT || 4000, () => console.log(`express is running on port ${process.env.PORT || 4000}`))

// http.listen(4000, function () {
//     console.log('listening on *:3000');
// });


// const io = require('socket.io')(serve)

// io.on('connection', function (socket) {
//     socket.on('chat message', function (msg) {
//         io.emit('chat message', msg);
//     });
// });


module.exports = app
