//Bibliotecas
import express from "express";
import path from "path";
import config from './configs/config.json' assert { type: 'json' };

const app = express();

// Objeto com as pastas que utilizaremos
const folders = {
  public: path.join(process.cwd(), 'src', 'public'),
  pages: path.join(process.cwd(),  'src','public', 'views')
};

config.FOLDERS = folders;

app.use(express.static(folders.public)); // Definindo a página public como uma página estática para os clients
app.set('view engine', 'ejs'); // Fazendo com que o express "leie" as páginas utilizando ejs

// Rotas
import homeRoute from "./routes/home.js";
app.use('/', homeRoute);

app.listen(config.server.port, () => console.log("[LOGS] - Online")); // iniciando servidor na porta 3000
