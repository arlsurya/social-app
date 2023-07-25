const mongoose = require('mongoose')
const {Schema} = mongoose

const chatSchema = new Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref:'users'
    },
    message:{
        type: String,
        default: ''
    }
},
{timestamps:true}
)

const chat = mongoose.model('chats', chatSchema)

module.exports = chat;