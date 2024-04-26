

const router = require('express').Router();
const config = require('../configs/definitions.json');
const crypto = require('crypto');


router.get('/', async (req, res) => {
    const password = crypto.randomBytes(Math.ceil(10 / 2)).toString('hex').slice(0, 10);
    res.render(config.FOLDERS.pages + '/home.ejs', { password: password}); //mandando um objeto para dentro do site, onde poderá ser acessado.
});

module.exports = router;