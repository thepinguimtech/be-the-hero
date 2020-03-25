// Importando as funcionalidades do express
const express = require('express');

// Importando o cors para determinar o acesso da aplicação
const cors = require('cors');

// Importando as rotas
const routes = require('./routes');

// armazena a aplicação (intaciar -> rotas, funcionalidades)
const app = express();

// Definir o endereço que poderá acessar a aplicação
app.use(cors());

// Informando para o express que estaremos usando JSON para o corpo da requsição
app.use(express.json());

// Carregando as rotas
app.use(routes);

// Ouvir a porta 3333 para quando acessar o localhost
app.listen(3333);

