const express = require('express');
const router = express.Router();
const Login = require('./Login');

router.get('/login', (req, res) => {
    res.render('index')
});

module.exports = router;