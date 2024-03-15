const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require('../config');
const generateAccessToken = (id, email, name) => {
    const payload = {
        id, email, name
    };
    return jwt.sign(payload, secret, {expiresIn: '24h'})
};

class AuthController {
    async registrationUser(req, res) {
        try {
            const {email, password, name,} = req.body;

            const hashPassword = bcrypt.hashSync(password, 10);
            const candidate = await db.query(`SELECT *
                                              FROM chat_user
                                              WHERE email = $1`, [email]);

            if (candidate.rows.length !== 0) {
                return res.status(400).json({message: 'пользователь уже зарегистрирован'})
            }


            const newUser = await db.query(`INSERT INTO chat_user(email, password, name)
                                            values ($1, $2, $3)
                                            RETURNING*`,
                [email, hashPassword, name,])

            return res.json(newUser, {message: 'пользователь успешно зарегистрирован'})

        } catch (e) {
            res.status(400).json({message: 'registration error'})
        }
    }


    async loginUser(req, res) {
        try {

            const {email, password} = req.body
            const user = await db.query(`SELECT *
                                         FROM chat_user
                                         WHERE email = $1`, [email]);

            if (user.rows.length === 0) {
                return res.status(400).json({message: `Пользователь ${email} не найден`})
            }

            const validPassword = bcrypt.compareSync(password, user.rows[0].password);

            if (!validPassword) {
                return res.status(400).json({message: `неверный пароль`})
            }


            const token = generateAccessToken(user.rows[0].id, user.rows[0].email, user.rows[0].name);
            return res.json({token})

        } catch
            (e) {
            res.json(e)
            // res.status(500).json({message: 'login error'})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await db.query(`SELECT *
                                          FROM chat_user`);

            // res.header("Access-Control-Allow-Origin", "*");
            // next();
            res.json(users.rows)
        } catch (e) {

        }

    }

}

module.exports = new AuthController();
