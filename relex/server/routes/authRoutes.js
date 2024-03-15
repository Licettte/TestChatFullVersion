const Router = require('express');
const router = new Router();
const authController = require('../controller/authController');

router.post('/registration', authController.registrationUser);
router.post('/login', authController.loginUser);
router.get('/users', authController.getUsers);

module.exports = router;
