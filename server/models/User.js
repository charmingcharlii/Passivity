const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        match: [/\w+@[^.]+/,'Please enter a valid email address']
    },
    password: {
        type: String,
        require: true,
        minLength: 8
    }
})

const User = model('User', userSchema)

module.exports = User