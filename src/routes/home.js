import { Router } from 'express';
import config from '../configs/definitions.json' assert {type: 'json'};
import crypto from 'crypto';

const router = Router();

router.get('/', async (req, res) => {
    const password = crypto.randomBytes(Math.ceil(10 / 2)).toString('hex').slice(0, 10);
    res.render(`${config.FOLDERS.pages}/home.ejs`, { password }); //mandando um objeto para dentro do site, onde poderá ser acessado.
});
export default router;
