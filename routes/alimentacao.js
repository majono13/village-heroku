const express = require('express')
const router = express.Router()


/*rota brinquedos*/
router.get('/', (req, res) => {
    res.render('../views/layouts/layout', {
        title: 'Alimentação',
        section: 'Alimentação',
    })
})

module.exports = router