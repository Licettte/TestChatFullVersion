const db = require('../db');

class ChatMessageController {
    async createMessage(req, res) {
        // const data = req.body;
        const {text, name, datetime} = req.body;
        const newMessages = await db.query(`INSERT INTO chat_message(text, name, datetime)
                                            values ($1, $2, $3)
                                            RETURNING*`,
            [text, name, datetime]);
        return res.json(newMessages.rows[0])
    }

    async getMessages(req, res) {
        const users = await db.query(`SELECT *
                                      FROM chat_message`)
        res.json(users.rows)
    }

    async getOneMessage(req, res) {
        const id = req.params.id
        const user = await db.query(`SELECT *
                                     FROM chat_message
                                     WHERE id = $1`, [id])
        res.json(user.rows[0])
    }

    async updateMessage(req, res) {
        const {text, name, datetime} = req.body
        const user = await db.query(`UPDATE chat_message
                                     SET id= $1,
                                         name= $2,
                                         email= $3,
                                         password = $4
                                     WHERE id = $1
                                     RETURNING*`, [text, name, datetime]);
        res.json(user.rows[0])
    }


    async deleteMessage(req, res) {
        const id = req.params.id
        const user = await db.query(`DELETE
                                     FROM chat_user
                                     WHERE id = $1`, [id])
        res.json(user.rows[0])
    }

}

module.exports = new ChatMessageController();
