const express = require('express') // import express module
const cors = require('cors')
const app = express()  // make an instance of express
const socket = require('socket.io')
app.use(cors()) 
app.use(express.json())  // allows JSON objects to be posted
app.use(express.urlencoded({ extended: true }))

require('./config/mongoose.config')
require('./routes/message.routes')(app)
const services = require('./services/message-service-server')
const server = app.listen(8000, () => console.log('Listening on port 8000'))

// to initialize the socket, we need to invoke a new instance
//     of socket.io and pass it our express server instance
// We must also include a configuration settings object to prevent CORS errors
const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    //every time you want to listen to the client, use socket.on
    socket.on('join_server', newUser => {
        console.log('socket id:', socket.id)
        console.log('new user:', newUser)
        socket.broadcast.emit('new_user_joined_chat', newUser)
        services.getAllMessages()
            .then(allMessages => {
                console.log(allMessages)
                socket.emit('send_all_messages', allMessages)
                
            })
        
    })

    socket.on('client_sent_message', message => {
        services.createMessage(message)
        socket.broadcast.emit('incoming_message', message)
    })
})