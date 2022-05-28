const express = require('express')
const router = express.Router()


/*rota home*/
router.get('/', (req, res) => {
    res.render('../views/layouts/layout', {
        conteudo: '(../index/slider)',
        title: 'Home',
        section: 'Home'
    })
})

module.exports = router