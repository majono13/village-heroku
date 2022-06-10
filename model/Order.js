const mongoose = require('mongoose')

const Order = mongoose.model('pedidos', {
    usrId: String,
    itemsId: []
})

module.exports = Order