require('dotenv').config()
const PORT = process.env.PORT || 4000

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect(process.env.MONGODB_URI)


const routes = require('./config/routes')
const socketRoutes = require('./controllers/socket')


app.use(bodyParser.json())

app.use('/api', routes)

// app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
app.use(express.static(`${__dirname}/public`))


const server = app.listen(PORT, () => console.log(`express is running on port ${PORT}`))


const io = require('socket.io')(server)

global.io = io

io.on('connection', socketRoutes.respond)

module.exports = app
