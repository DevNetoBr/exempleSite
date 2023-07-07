/*
- Criado por: DevNetoBr
- Data de criação: 03/07/2023
*/


//Blibiotecas
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

// Objeto que pegas as pastas que utilizaremos
const folders = {
  public: path.join(__dirname, 'public'),
  pages: path.join(__dirname, 'public', 'views'),
  routes: path.join(__dirname, 'src','routes')
};

//Informações do servidor, recomendo que deixe isso em um arquivo .json fora da index :)
let client = {
  port: 3000,
}

// Coisas que o express vai usar
app.use(express.static(folders.public)); // Definindo a página public como uma página stática para os clients
app.set('view engine', 'ejs'); // Fazendo com que o express leie as páginas utilizando ejs


try{
//Laço de repetição que verifica os arquivos .js do diretório src/routes
fs.readdirSync(folders.routes).forEach((file) =>{
  if (file.endsWith('.js')) { //Verifica se o nome do arquivo tem .js (Pega apenas os arquivos javaScript)
    const filePage = path.join(folders.routes, file); //Pega o diretório do arquivo .js
    const pageItems = require(filePage); // Importa os valores exportados nos arquivos .js
    const renderPage = (res, values={}) => res.render(path.join(folders.pages, pageItems.name), values); // função que irá renderizar as páginas, essa função será "enviada" para os arquivos .js 
    pageItems.run(app, renderPage) // Executando a função run do pageItems, isso renderizará as paginas .ejs ndas views
  };
});
} catch (e){
  console.log("[ERROR] - Error!\n"+e)
};

app.listen(client.port, () => console.log("[LOGS] - Online")); // iniciando servidor na porta 3000
