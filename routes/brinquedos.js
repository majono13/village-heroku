const express = require('express')
const router = express.Router()


/*rota brinquedos*/
router.get('/', (req, res) => {
    res.render('../views/layouts/layout', {
        title: 'Brinquedos',
        section: 'Brinquedos',
    })
})

module.exports = router