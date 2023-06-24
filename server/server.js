const express = require('express') // import express module
const cors = require('cors')
const app = express()  // make an instance of express
const socket = require('socket.io')

app.use(cors()) 
app.use(express.json())  // allows JSON objects to be posted
app.use(express.urlencoded({ extended: true }))

// require('./config/mongoose.config')
// require('./routes/player.routes')(app)

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
    // logs each client connection, which gets its own socket it
    console.log('socket id:', socket.id)
    console.log('Nice to meet you. (Shakes hand)')

    // Other event listeners go here
    socket.emit('Welcome', 'Welcome to Jumanji')
})