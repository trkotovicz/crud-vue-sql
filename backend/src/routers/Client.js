const { Router } = require('express');
const clientController = require('../controllers/Client');

const clientRouter = Router();

clientRouter.get('/clients', clientController.getAll);
clientRouter.get('/clients/:id', clientController.getById);

module.exports = clientRouter;
