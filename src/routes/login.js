const express = require('express');

const router = express();

router.get('/', (req, res) => {
    res.send('Olá mundo');
})

module.exports = router;
