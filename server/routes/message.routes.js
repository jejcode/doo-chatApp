const MessageController = require('../controllers/message.controller')
module.exports = (app) => {
    app.get('/api/messages', MessageController.findAllMessages)
    app.post('/api/messages', MessageController.createOneMessage)
    app.get('/api/messages/:id', MessageController.findMessage)
    app.put('/api/messages/:id', MessageController.updateMessage)
    app.delete('/api/messages/:id', MessageController.deleteMessage)
}