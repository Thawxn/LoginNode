const express = require('express');
const session = require('express-session')
const path = require('path');

//rotas
const mainRoutes = require('./routes/login');

const server = express();

//view engine
server.set('view engine', 'ejs');

//static
server.use(express.static(path.join(__dirname, '../public')));

//session
server.use(session({secret:'aldsufhnçana'}));


server.use(mainRoutes);


server.listen(3000, () => {
    console.log('Servidor funcionando')
});