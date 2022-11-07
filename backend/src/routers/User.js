const { Router } = require('express');
const userController = require('../controllers/User');

const router = Router();

router.post('/login', userController.login);

module.exports = router;
