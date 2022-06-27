const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('dotenv').config()

const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)

const Produto = require('../model/Product')
const itensCarrinho = []

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.ny1mj.mongodb.net/?retryWrites=true&w=majority`)

    .then(() => {
        console.log('conectado ao mongo')
    })
    .catch((err) => console.log(err))

router.get('/', async (req, res) => {
    Produto.find()
        .then((carrinho) => {
            res.render('../views/layouts/layout', {
                title: 'Carrinho',
                section: 'Carrinho',
                carrinho: criaArray(carrinho)
            })
        })
})

//coloca os objetos no array
function criaArray(carrinho) {
    for (let i in carrinho) {
        itensCarrinho.push(carrinho[i])
    }
    return itensCarrinho
}


router.post('/carrinho', async (req, res) => {
    const { img, nome, preco, qtd, tipo } = req.body

    try {
        const novoProduto = {
            img: img,
            nome: nome,
            preco: preco,
            qtd: qtd,
            estoque: estoque
        }

        await Produto.create(novoProduto)
        res.status(201).json(novoProduto)
    }
    catch (err) {
        res.status(500).json(`Falha na inclusão: ${err}`)
        return
    }
})

module.exports = router