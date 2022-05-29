const express = require('express')
const router = express.Router()


/*rota diversos*/
router.get('/', (req, res) => {
    res.render('../views/layouts/layout', {
        title: 'Contato',
        section: 'Contato',
    })
})

module.exports = router