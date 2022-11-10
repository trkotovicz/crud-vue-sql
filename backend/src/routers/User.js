const { Router } = require('express');
const userController = require('../controllers/User');

const router = Router();

router.post('/login', userController.login);
router.post('/register', userController.register);

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);

module.exports = router;
