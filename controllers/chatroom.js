const Chatroom = require('../models/chatroom')

function createRoute(req, res) {
    res.status(201).json({ message: req.body.message })

    // Chatroom
    //     .create(req.body)
    //     .then(() => res.status(201).json({ message: 'message has been created sucessfully' }))
    //     .catch(err => res.status(201).json({ errors: err }))
}

function showRoute(req, res) {
    const arr = ['5cb51949c94e70535a38a039', '5cb5174249414f4e9dec2709']
    Chatroom
        .find({ 'user': { $all: arr } })
        // .populate('user1')
        // .populate('user2')
        .then((messages) => res.status(201).json(messages))
        .catch(err => res.status(201).json({ errors: err }))
}


// if (messages.length > 0) {
//     res.status(201).json(messages)

// }

module.exports = {
    create: createRoute,
    show: showRoute
}