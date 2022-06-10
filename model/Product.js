const mongoose = require('mongoose')

const Produto = mongoose.model('carrinho', {
    img: String,
    nome: String,
    preco: Number,
    qtd: Number,
    estoque: Number
})

module.exports = Produto
