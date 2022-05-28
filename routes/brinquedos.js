const express = require('express')
const router = express.Router()

/*rota brinquedos*/
router.get('/Brinquedos', (req, res) => {
    //console.log('servidor iniciado')
    let conteudo = 'Conteudo pag brinquedos'
    res.render('brinquedos', {
        title: 'Brinquedos',
        section: 'Brinquedos',
        body: conteudo
    })
})