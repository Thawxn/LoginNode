const express = require('express');

const router = express();

router.get('/login', (req, res) => {
    res.render('index')
})

module.exports = router;
