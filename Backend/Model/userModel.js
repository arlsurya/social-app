const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const user = mongoose.model('users',UserSchema)

module.exports = user;