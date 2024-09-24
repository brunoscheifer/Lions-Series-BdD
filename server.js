const app = require('./src/app')
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/series")
  .then(() => {
    console.log("Conectado");
  })
  .catch((erro) => {
    console.error("Erro ao conectar", erro);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
