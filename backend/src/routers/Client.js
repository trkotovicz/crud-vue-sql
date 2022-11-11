const { Router } = require('express');
const clientController = require('../controllers/Client');
const authUser = require('../middlewares/authUser');

const clientRouter = Router();

const route = '/clients';

clientRouter.use(authUser);

clientRouter.get(route, clientController.getAll);
clientRouter.get(`${route}/:id`, clientController.getById);
clientRouter.patch(`${route}/:id`, clientController.update);
clientRouter.delete(`${route}/:id`, clientController.remove);
clientRouter.post(route, clientController.create);

module.exports = clientRouter;
