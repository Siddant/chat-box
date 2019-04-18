require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect(process.env.MONGODB_URI)


const routes = require('./config/routes')
const socketRoutes = require('./controllers/socket')


app.use(bodyParser.json())

app.use('/api', routes)

app.use('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`))


const server = app.listen(process.env.PORT || 4000, () => console.log(`express is running on port ${process.env.PORT || 4000}`))


const io = require('socket.io')(server)
io.on('connection', socketRoutes.respond)

module.exports = app
