const express = require('express');

const router = express();

router.get('/', (req, res) => {
    res.render('views/index');
})

module.exports = router;
