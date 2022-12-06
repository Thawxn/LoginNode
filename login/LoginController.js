const express = require('express');
const router = express.Router();
const Login = require('./Login');
const bcrypt = require('bcryptjs');
const User = require('./Login');

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/login', (req, res) => {
    res.render('login')
});

router.post('/authenticate', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    Login.findOne({where:{ email: email }}).then(login => {
        if (login != undefined){
            var correct = bcrypt.compareSync(password, login.password);

            if(correct){
                req.session.login = {
                    id: login.id,
                    email: login.email
                }
                res.json(req.session.login)
            }else{
                res.send('Email ou senha incorreta');
            }
        }else{
            res.send('Email ou senha incorreta');
        }
    })

})

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