const Sequilize = require('sequelize');
const connection = require('../database/database');

const User = connection.define('users', {
    email:{
        type: Sequilize.STRING,
        allNull: false
    },password: {
        type: Sequilize.STRING,
        allNull: false
    }
});

module.exports = User;