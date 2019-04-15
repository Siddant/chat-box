const mongoose = require('mongoose')


//Data structure model
const chatSchema = new mongoose.Schema({
    user1: { type: mongoose.Schema.ObjectId, ref: 'User', required: 'User name is required' },
    user2: { type: mongoose.Schema.ObjectId, ref: 'User', required: 'User name is required' },
    messages: [{ type: String, required: true, maxlength: 250 }]
})

module.exports = mongoose.model('User', chatSchema)
