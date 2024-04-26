
//Blibiotecas
const express = require("express");
const path = require("path");
const app = express();
const config = require("../configs/definitions.json");

// Objeto com as pastas que utilizaremos
const folders = {
  public: path.join(process.cwd(), 'public'),
  pages: path.join(process.cwd(), 'public', 'views')
};

config.FOLDERS = folders;

app.use(express.static(folders.public)); // Definindo a página public como uma página stática para os clients
app.set('view engine', 'ejs'); // Fazendo com que o express "leie" as páginas utilizando ejs

//Rotas
app.use('/', require('../routes/home.js'));


app.listen(config.PORT, () => console.log("[LOGS] - Online")); // iniciando servidor na porta 3000
