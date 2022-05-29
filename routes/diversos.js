const express = require('express')
const router = express.Router()


/*rota diversos*/
router.get('/', (req, res) => {
    res.render('../views/layouts/layout', {
        title: 'Diversos',
        section: 'Diversos',
    })
})

module.exports = router