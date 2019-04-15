const Messages = require('../models/message')

function registerRoute(req, res) {
    console.log(req.body)
    // User.create(req.body)
    //     .then(() => res.status(201).json({ message: `${req.body.username} has been created sucessfully` }))
    //     .catch(err => res.status(201).json({ errors: err }))
}

module.exports = {
    register: registerRoute,
    login: loginRoute
}