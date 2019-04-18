const mongoose = require('mongoose')

//Data structure model
const dummySchema = new mongoose.Schema({
    text: { type: String, required: true, maxlength: 250 }
})

module.exports = mongoose.model('Dummy', dummySchema)
