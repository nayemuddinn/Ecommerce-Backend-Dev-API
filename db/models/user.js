const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        validate: {
            message: 'Please provide an email',
            validator: validator.isEmail
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Pleas Provide password'],
        minlength: 6
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }

});

module.exports = mongoose.model('user', userSchema)