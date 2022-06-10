const mongoose = require('mongoose')

const User = mongoose.model('usuarios', {
    img: String,
    nome: String,
    email: String,
    telefone: String
})

module.exports = User