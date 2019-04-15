const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

//Data structure model
const userSchema = new mongoose.Schema({
    username: { type: String, required: 'User name is required', unique: 'User name already exist, please enter different User name' },
    password: { type: String, required: 'Password is required' },
    email: { type: String, required: 'Email address is required', unique: 'Email address already exist, please enter different Email address' }
})

//Add project virtual, where projects users match this user
userSchema.virtual('project', {
    ref: 'Project',
    localField: '_id',
    foreignField: 'user'
})

//Use plugin to make sure only unique values can be used where required
userSchema.plugin(uniqueValidator)

//Add confirmation virtual for verification, not save in database
userSchema.virtual('passwordConfirmation')
    .set(function setPasswordConfirmation(passwordConfirmation) {
        this._passwordConfirmation = passwordConfirmation
    })

//Pre Validate check password and confirmation match
userSchema.pre('validate', function checkPasswordsMatch(next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
        this.invalidate('passwordConfirmation', 'Passwords do not match')
    }
    next()
})
//Pre save, hash the password
userSchema.pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
})

//Validate password method, checks wether password entered matches hash stored in database
userSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

//Remove password, __v and id tag when returning JSON
userSchema.set('toJSON', {
    virtuals: true,
    transform(doc, json) {
        delete json.__v
        delete json.id
        delete json.password
        return json
    }
})

module.exports = mongoose.model('User', userSchema)
