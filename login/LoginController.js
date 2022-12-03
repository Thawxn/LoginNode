const express = require('express');
const router = express.Router();
const Login = require('./Login');
const bcrypt =require('bcryptjs')

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/login', (req, res) => {
    res.render('index')
});

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    Login.findOne({where: { email: email}}).then(login => {
        if(login == undefined){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);

            Login.create({
                email: email,
                password: hash
            }).then(() => {
                res.redirect('/')
            }).catch((erro) => {
                res.redirect('/')
            });
        }else{
            res.send('Email já criado');
        };
    })
});

module.exports = router;