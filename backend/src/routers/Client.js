const { Router } = require('express');
const clientController = require('../controllers/Client');
const authUser = require('../middlewares/authUser');

const clientRouter = Router();

clientRouter.use(authUser);

clientRouter.get('/clients', clientController.getAll);
clientRouter.get('/clients/:id', clientController.getById);

module.exports = clientRouter;
