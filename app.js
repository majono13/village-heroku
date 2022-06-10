if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()


//Configurando JSON Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

/*Importando rotas*/
const indexRouter = require('./routes/index')


//HABILITANDO ROTAS
app.use('/', indexRouter)

//Arquivos estáticos public
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//Arquivos estáticos src
app.use(express.static('src'))
app.use('/src', express.static(__dirname + 'src/'))



//Template engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', './layouts/layout')
app.use(expressLayouts)





//Iniciando o servidor
app.listen(process.env.PORT, console.log("servidor iniciado"))