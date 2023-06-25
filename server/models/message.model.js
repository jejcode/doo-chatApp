const mongoose = require('mongoose') // import mongoose library
const MessageSchema = new mongoose.Schema(
    {
        author: {
            type: String, 
            required: [true, 'Name is required']
        },
        body: {
            type: String,
            required: [true, 'Text is required']
        }


    }, { timestamps: true }
)
module.exports = mongoose.model('Message', MessageSchema)