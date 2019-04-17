const mongoose = require('mongoose')


const messageSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    text: { type: String, required: true, maxlength: 250 }
}, {
        timestamps: true
    })


//Data structure model
const chatroomSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    message: [messageSchema]
})

chatroomSchema.set('toJSON', {
    transform(doc, json) {
        delete json.__v
        return json
    }
})

// read: { type: Date }


// chatrooms: [{ type: String, required: true, maxlength: 250 }]
// user1: { type: mongoose.Schema.ObjectId, ref: 'User', required: 'User name is required' },
// user2: { type: mongoose.Schema.ObjectId, ref: 'User', required: 'User name is required' },
module.exports = mongoose.model('Chatroom', chatroomSchema)
