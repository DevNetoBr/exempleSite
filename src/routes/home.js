module.exports = {
  name: 'home', // nome do arquivo ejs referente a está página
  run: (app, render) =>{ // renderizando a página
    app.get('/', (req, res) =>{
      render(res, {nome: "José"}); // usando a função render da index.js. Essa função irá renderizar a página home .ejs
    })
  }
}