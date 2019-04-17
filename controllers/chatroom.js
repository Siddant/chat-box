const Chatroom = require('../models/chatroom')

function createRoute(req, res) {
    // console.log(req.body)
    // res.status(201).json({ message: req.body.user })
    // res.status(201).json({ message: 'message has been created sucessfully' })
    Chatroom
        .create(req.body)
        .then(() => res.status(201).json({ message: 'message has been created sucessfully' }))
        .catch(err => res.status(201).json({ errors: err }))
}

function showRoute(req, res) {
    const arr = ['5cb51949c94e70535a38a039', '5cb51dc4452adb56b8127eeb']
    Chatroom
        .find({ 'user1': { $in: arr }, 'user2': { $in: arr } })
        // .populate('user1')
        // .populate('user2')
        .then((messages) => res.status(201).json(messages))
        .catch(err => res.status(201).json({ errors: err }))
}


module.exports = {
    create: createRoute,
    show: showRoute
}