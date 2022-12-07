const Sequilize = require('sequelize');

const connection = new Sequilize('login', 'root', '2001', {
    host : 'localhost',
    dialect: 'mysql'
});

module.exports = connection;