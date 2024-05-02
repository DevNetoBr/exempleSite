import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import config from './src/configs/config.json' assert { type: 'json'};
import session from 'express-session';
import mongoose from 'mongoose';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Inicialização do aplicativo Express
const app = express();

// Definição dos diretórios estático e de visualizações
const directories = {
  static: path.join(process.cwd(), 'src', 'public'), // Diretório de arquivos estáticos
  views: path.join(process.cwd(), 'src', 'views')     // Diretório de visualizações
};

// Adicionando os diretórios ao objeto de configuração
config.directories = directories;

// Configuração do aplicativo Express
app.use(express.static(directories.static)); // Define a pasta 'public' como estática para os clientes
app.set('view engine', 'ejs'); // Define o mecanismo de visualização como EJS
app.set('views', 'views'); // Define a pasta de visualizações como 'views'
app.use(session({
  secret: process.env.SESSION_SECRET, 
  saveUninitialized: true, 
  resave: true
})); // Configuração da sessão
app.use(express.urlencoded({ extended: true }));

// Importação e definição das rotas
import homeRoute from './src/routes/home.js';
app.use('/', homeRoute);

// Inicia o servidor na porta especificada no arquivo de configuração
const PORT = config.server.port;

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log(`[DB] - Conectado`);
    app.listen(PORT, () => {
      console.log(`[LOGS] - Servidor online na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`[DB] - Erro ao conectar`);
    console.error(err);
  });
