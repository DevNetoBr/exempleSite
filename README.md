# Exemplo de Site usando EJS

Este repositório contém um site de exemplo que utiliza a engine de template EJS (Embedded JavaScript) para gerar senhas aleatórias.

## Visão Geral

O site de exemplo foi desenvolvido com o objetivo de demonstrar o uso do EJS como uma ferramenta para geração de senhas aleatórias. Ele é composto pelos seguintes componentes:

- Arquivos EJS: O site utiliza arquivos EJS como templates para gerar a interface do usuário, incluindo a exibição da senha gerada.
- Backend em Node.js: O site é construído em Node.js, utilizando o framework Express.js para lidar com as rotas e renderizar os templates EJS.
- Biblioteca crypto: A biblioteca crypto do Node.js é utilizada para gerar as senhas aleatórias com base em valores criptograficamente seguros.

## Funcionalidades

O site de exemplo possui as seguintes funcionalidades:

- Geração de senha aleatória: Ao acessar a página principal do site, uma senha aleatória é gerada e exibida na interface.

## Como executar o site

Para executar o site de exemplo, siga as etapas abaixo:

1. Certifique-se de ter o Node.js instalado em seu ambiente de desenvolvimento.
2. Clone este repositório para o seu computador.
3. Abra um terminal na pasta raiz do projeto.
4. Execute o comando `yarn install` para instalar as dependências do projeto.
5. Execute o comando `node .` para iniciar o servidor.
6. Acesse o site em seu navegador, digitando o endereço `http://localhost:3000`.

## Observação sobre o uso do Yarn

Este projeto utiliza o gerenciador de pacotes Yarn ao invés do NPM para instalar e gerenciar suas dependências. O Yarn oferece algumas vantagens em relação ao NPM, como velocidade de instalação e determinismo de versão. No entanto, você pode optar por usar o NPM, se preferir. Certifique-se apenas de executar os comandos correspondentes corretamente.