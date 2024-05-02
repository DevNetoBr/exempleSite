import crypto from 'crypto'; 
import config from '../configs/config.json' assert { type: 'json' };

export async function getPassword(req, res, next) {
    const password = crypto.randomBytes(Math.ceil(10 / 2)).toString('hex').slice(0, 10);
    res.render(`${config.directories.views}/home.ejs`, { 
        password: password, 
        config: config,
        page: {
            description: "Gere uma senha",
            title: "Gerador de senhas",
        }
    }); 
};