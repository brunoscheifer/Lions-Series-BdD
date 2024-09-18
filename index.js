const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/series')
    .then(() => {
        console.log('Conectado')
    })
    .catch(erro => {
        console.error('Erro ao conectar', erro)
    })

let esquemaSeries = new mongoose.Schema({
    nome: {type: String, required: true},
    ano: {type: String, required: true},
    genero: {type: String, required: true},
    classificacao: {type: String, required: true},
    diretor: {type: String, required: true}
})

const Serie = mongoose.model('Series', esquemaSeries)

    const port = 3000
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})