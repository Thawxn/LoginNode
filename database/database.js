const Sequilize = require('sequelize');

const connection = new Sequilize('login', 'root', '40028922Th.', {
    host : 'localhost',
    dialect: 'mysql'
});

module.exports = connection;