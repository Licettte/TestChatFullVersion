const Router = require('express');
const router = new Router;
const chatMessageController = require('../controller/chatMessage');

router.post('/message', chatMessageController.createMessage);
router.get('/message', chatMessageController.getMessages);
router.get('/message/:id', chatMessageController.getOneMessage);
router.put('/message', chatMessageController.updateMessage);
router.delete('/message/:id', chatMessageController.deleteMessage);

module.exports = router;
