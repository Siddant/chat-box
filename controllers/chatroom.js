const Chatroom = require('../models/chatroom')
const Dummy = require('../models/dummy')

function createRoute(req, res) {
    Chatroom
        .create(req.body)
        .then(() => res.status(201).json({ message: 'message has been created sucessfully' }))
        .catch(err => res.status(201).json({ errors: err }))
}

function showRoute(req, res) {
    '5cb51dc4452adb56b8127eeb'

    const arr = ["5cb51949c94e70535a38a039", "5cb5174249414f4e9dec2709"]
    Chatroom
        .find({ 'user': { $all: arr } })
        .populate('user')
        .populate('message.user')
        .then((messages) => res.status(201).json(messages))
        .catch(err => res.status(201).json({ errors: err }))
}

function updateRoute(req, res) {
    Chatroom
        .find({ 'user': { $all: req.body.user } })
        .then((messages) => {
            messages[0].message.push(req.body.message)
            messages[0].save()
            res.status(200).json({ message: 'message has been updated sucessfully' })
        })
        .catch(err => res.status(500).json({ errors: err }))
}


function testing(msg) {

    //5cba455b1eb2afd7687319b1
    //msg.showId
    Dummy
        .findById(msg.showId)
        .then((messages) => {
            messages.message.push(msg.message)
            messages.save()
            global.io.emit('recieving message', { text: msg.message.text, chatId: msg.showId })
        })
        .catch(err => global.io.emit('recieving message', 'err'))
}




function createTesting(req, res) {
    Dummy
        .create(req.body)
        .then(() => res.status(201).json({ message: 'message has been created sucessfully' }))
        .catch(err => res.status(201).json({ errors: err }))
}

// function indexRoute(req, res) {
//     Chatroom
//         .find({ 'user': { $all: req.body.user } })
//         .then((messages) => {
//             messages[0].message.push(req.body.message)
//             messages[0].save()
//             res.status(200).json({ message: 'message has been updated sucessfully' })
//         })
//         .catch(err => res.status(500).json({ errors: err }))
// }

module.exports = {
    create: createRoute,
    show: showRoute,
    update: updateRoute,
    testing: testing,
    createTesting: createTesting
}