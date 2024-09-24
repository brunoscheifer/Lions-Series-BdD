const mongoose = require("mongoose");

let esquemaSeries = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true 
    },
    ano: { 
        type: String, 
        required: true 
    },
    genero: { 
        type: String, 
        required: true 
    },
    classificacao: { 
        type: String, 
        required: true 
    },
    diretor: { 
        type: String, 
        required: true 
    },
  });

const Serie = mongoose.model("Series", esquemaSeries);

module.exports = Serie