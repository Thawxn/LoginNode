const express = require('express');
const session = require('express-session')
const path = require('path');

const mainRoutes = require('./routes/login');

const server = express();

server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
server.set('views', path.join(__dirname, 'views'))

server.use(express.static(path.join(__dirname, '../public')));

server.use(session({secret:'aldsufhnçana'}));

server.use(mainRoutes);

server.listen(3000, () => {
    console.log('Servidor funcionando')
});