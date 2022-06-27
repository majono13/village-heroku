const mongoose = require('mongoose')


const Produto2 = mongoose.model('produtos', {
    img: String,
    nome: String,
    preco: Number,
    qtd: Number,
    tipo: String
})

module.exports = Produto2

