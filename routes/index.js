const express = require('express')
const router = express.Router()



/*rota home*/
router.get('/', (req, res) => {
    res.render('../views/layouts/layout', {
        title: 'Home',
        section: 'Home',
    })
})






module.exports = router