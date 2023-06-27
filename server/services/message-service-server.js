const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://localhost:8000/api'
})

const createMessage = async (formData) => {
    try{
        const message = await instance.post('/messages', formData)
        return message.data
    }
    catch (err) {
        throw err
    }
}
const getAllMessages = async () => {
    try {
        const messages = await instance.get('/messages')
        return messages.data
    }
    catch (err){
        console.log(err)
        throw(err)
    }
}

module.exports = {
    createMessage,
    getAllMessages
}