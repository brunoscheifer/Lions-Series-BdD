const Serie = require("../models/Serie")

async function criarSerie(req, res) {
const { nome, ano, genero, classificacao, diretor } = req.body
    try {
      const novaSerie = new Serie({ nome, ano, genero, classificacao, diretor });
      const serieNova = await novaSerie.save();
      res.status(200).json({mensagem: 'Serie Adicionada', serie: serieNova})
    } catch (erro) {
        res.status(500).json({mensagem: "Erro ao cadastrar cliente",erro: erro.message,})
    }
}

async function listarSeries(req, res) {
    try {
      const series = await Serie.find();
      res.status(200).json(series)
    } catch (erro) {
        res.status(500).json({mensagem: "Erro ao listar Series", erro: erro.message,});
    }
}

async function attserie(req, res) {
const { id } = req.params;
const { nome, ano, genero, classificacao, diretor } = req.body
    try {
      const serieatt = await Serie.findByIdAndUpdate(
        id,
        { nome, ano, genero, classificacao, diretor },
        { new: true, runValidators: true }
      );
      if(serieatt) {
        res.status(200).json({ mensagem: 'Serie Atualizada', serie: serieatt})
      } else {
        res.status(404).json({ mensagem: 'Série não encontrada'})
      }
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao atualizar', erro: erro.message})
    }
}

async function delserie(req, res) {
const { id } = req.params;
    try {
      const seriedel = await Serie.findByIdAndDelete(id);
      if(seriedel) {
        res.status(200).json({ mensagem: 'Cliente deletado', serie: seriedel})
      } else {
        res.status(404).json({ mensagem: 'Serie não encontrada'})
      }
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao deletar', erro: erro.message});
    }
}

module.exports = {
    criarSerie,
    listarSeries,
    attserie,
    delserie
}