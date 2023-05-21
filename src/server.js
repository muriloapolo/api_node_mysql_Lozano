//Utilizar o arquivo de configuração de variáveis dentro dos arquivos
require('dotenv').config({path:'variaveis.env'});
//Chamar o express
const express = require("express");
//Permitir o uso de API's em outros domínios.
const cors = require("cors");
//Permitir converter o corpo de uma requisição em outros formatos
const bodyParser = require('body-parser');
//Usar as rotas do arquivo de rotas
const routes = require('./routes');
//Chamar o server utilizando o express
const server = express();
server.use(cors());//Usa o Cors
server.use(bodyParser.urlencoded({extended: false}));//Usa o body parser
server.use('/api',routes);// Todas as rotas vão conter esse endereço /api/
//Fazer o servidor rodar
server.listen(process.env.PORT, ()=>{console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)});