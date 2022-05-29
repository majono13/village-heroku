if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()


/*Importando rotas*/
const indexRouter = require('./routes/index')
const toyRouter = require('./routes/brinquedos')
const foodRouter = require('./routes/alimentacao')
const diverseRouter = require('./routes/diversos')
const contactRouter = require('./routes/contato')

//HABILITANDO ROTAS
app.use('/', indexRouter)
app.use('/brinquedos', toyRouter)
app.use('/alimentacao', foodRouter)
app.use('/diversos', diverseRouter)
app.use('/contato', contactRouter)

//Arquivos estáticos
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))



//Template engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', './layouts/layout')
app.use(expressLayouts)




//Iniciando o servidor
app.listen(process.env.PORT, console.log("servidor iniciado"))