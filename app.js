if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

/*Importando rotas*/
const indexRouter = require('./routes/index')

//HABILITANDO ROTAS
app.use('/', indexRouter)


//Arquivos estáticos
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))



//Template engine
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', './layouts/layout')


//Iniciando o servidor
app.listen(process.env.PORT, console.log("servidor iniciado"))