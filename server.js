const express = require('express');
const session = require('express-session')
const sequilize = require('sequelize');
const bodyParser = require('body-parser');
const path = require('path');
const mainRoutes = require('./src/routes/login');
const connection = require('./database/database');

const server = express();

//Body Parser
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

//View engine
server.set('view engine', 'ejs');

//Static
server.use(express.static(path.join(__dirname, '../public')));

//Session
server.use(session({secret:'aldsufhnçana'}));

//Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!');
    }).catch((erro) => {
        console.log(erro);
    });

//Rotas
server.use(mainRoutes);


server.listen(3000, () => {
    console.log('Servidor funcionando');
});