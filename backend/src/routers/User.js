const { Router } = require('express');
const userController = require('../controllers/User');

const router = Router();

router.post('/login', userController.login);
router.get('/users/:id', userController.getById);

module.exports = router;
