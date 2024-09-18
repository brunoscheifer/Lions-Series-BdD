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

async function criarSerie(nome, ano, genero, classificacao, diretor) {
    try{
        const novaSerie = new Serie({nome, ano, genero, classificacao, diretor});
        return await novaSerie.save();
    } catch (erro) {
        console.error("Erro ao criar serie:", erro);
        throw erro;
    }
}

app.post("/series", async (req, res) => {
    try {
        const {nome, ano, genero, classificacao, diretor} = req.body;
        const novaSerie = await criarSerie(nome, ano, genero, classificacao, diretor);
        res.status(201).json({mensagem: "Serie adicionada com sucesso!", serie: novaSerie});
    } catch (erro) {
        res.status(500).json({mensagem: "Erro ao adicionar serie", erro: erro.message});
    }
});

async function listarSeries() {
    try {
        return await Serie.find();
    } catch (erro) {
        console.error("Erro ao listar series: ", erro);
        throw errro;
    }
}

app.get("/series", async (req, res) => {
    try {
        const series = await listarSeries();
        res.status(200).json(series);
    } catch (erro) {
        res.status(500).json({mensagem: "Erro ao listar series", erro: erro.message});
    }
})

    const port = 3000
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})