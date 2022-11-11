const { StatusCodes } = require('http-status-codes');
const clientService = require('../services/Client');

module.exports = {
  create: async (req, res) => {
    const user = await clientService.create(req.body);
    res.status(StatusCodes.CREATED).json(user);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const user = await clientService.getById(id);
    res.status(StatusCodes.OK).json(user);
  },

  getAll: async (_req, res) => {
    const users = await clientService.getAll();
    res.status(StatusCodes.OK).json(users);
  },

  remove: async (req, res) => {
    const { id } = req.params;
    await clientService.remove(id);
    res.status(StatusCodes.NO_CONTENT).end();
  },

  update: async (req, res) => {
    const { id } = req.params;
    const client = await clientService.update(req.body, id);
    res.status(StatusCodes.OK).json(client);
  },
};
