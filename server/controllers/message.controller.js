const Message = require('../models/message.model')
module.exports = {
    findAllMessages : (req, res) => {
        Message.find()
            .then(allMessages => {
                res.json(allMessages)
            })
            .catch(err => {
                res.json({ message: 'Something went wrong.', error: err})
            })
    },

    findMessage : (req, res) => {
        Message.findOne({_id: req.params.id})
        .then( Message => {
            console.log(Message)
            res.json(Message)
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    createOneMessage : (req,res) => {
        Message.create(req.body)
            .then( newMessage => {
                res.json(newMessage)
            })
            .catch(err => res.status(400).json(err))
    },

    updateMessage : (req,res) => {
        Message.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then( updatedMessage => {
                res.json(updatedMessage)
            })
            .catch(err => res.status(400).json(err))
    },

    deleteMessage : (req, res) => {
        Message.findByIdAndDelete({_id: req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json(err))
    }
    
}