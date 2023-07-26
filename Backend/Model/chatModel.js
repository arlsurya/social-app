const mongoose = require('mongoose')
const {Schema} = mongoose

// Function to get the current Nepal Time (NPT) as a Date object
function getCurrentNepalTime() {
    const nepalTimeOffset = 5 * 60 + 45; // Nepal Timezone offset in minutes (UTC+5:45)
    return new Date(Date.now() + nepalTimeOffset * 60000);
  }
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
{ timestamps: {
    currentTime: () => getCurrentNepalTime(),
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }}
)

const chat = mongoose.model('chats', chatSchema)

module.exports = chat;