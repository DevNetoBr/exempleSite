module.exports = {
  name: 'home', // Nome do arquivo .ejs referente a está página
  run: (app, render) =>{// Renderizando a página

    app.get('/', (req, res) =>{
      const crypto = require('crypto');
      const passwordLength = 10;
      const password = crypto.randomBytes(Math.ceil(passwordLength / 2)).toString('hex').slice(0, passwordLength);
      render(res, {password: password}); // Usando a função render da index.js. Essa função irá renderizar a página home.ejs. Os valores dentro do objeto serão enviados para a página home.ejs
      
    })
  }
}
