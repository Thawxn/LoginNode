const express = require('express');
const router = express.Router();
const Login = require('./Login');

router.get('/login', (req, res) => {
    res.render('index')
});

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    res.json({email, password});
});

module.exports = router;