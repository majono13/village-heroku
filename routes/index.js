const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('dotenv').config()


//Configurando/conectando mongoose
const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)

const Produto = require('../model/Product')
const Usuario = require('../model/User')
const Pedido = require('../model/Order')

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.ny1mj.mongodb.net/?retryWrites=true&w=majority`)

    .then(() => {
        console.log('conectado ao mongo')
    })
    .catch((err) => console.log(err))


/***************** ROTAS ****************************/
router.get('/carrinho', (req, res) => {
    res.render('../views/layouts/layout', {
        title: 'Carrinho',
        section: 'Carrinho',
    })
})
router.post('/carrinho', async (req, res) => {
    const { img, nome, preco, qtd, estoque } = req.body

    try {
        const novoProduto = {
            img: img,
            nome: nome,
            preco: preco,
            qtd: qtd,
            estoque: estoque
        }

        await Produto.creat(novoProduto)
        res.status(201).json(novoProduto)
    }
    catch (err) {
        res.status(500).json(`Falha na inclusão: ${err}`)
        return
    }
})

router.get('/listar', async (req, res) => {
    let produtos = [];
    produtos = await Produto.find();
    res.json(produtos)
    return
})



/*rota home*/
router.get('/', (req, res) => {
    res.render('../views/layouts/layout', {
        title: 'Home',
        section: 'Home',
        class: '.mais-vendidos',
        indice: 0
    })
})

/*rota diversos*/
router.get('/diversos', (req, res) => {
    res.render('../views/layouts/layout', {
        title: 'Diversos',
        section: 'Diversos',

    })
})

/*rota contatos*/
router.get('/contato', (req, res) => {
    res.render('../views/layouts/layout', {
        title: 'Contato',
        section: 'Contato',
    })
})

/*rota brinquedos*/
router.get('/brinquedos', (req, res) => {
    res.render('../views/layouts/layout', {
        title: 'Brinquedos',
        section: 'Brinquedos',
    })
})

/*rota alimentação*/
router.get('/alimentacao', (req, res) => {
    res.render('../views/layouts/layout', {
        title: 'Alimentação',
        section: 'Alimentação',
    })
})

module.exports = router