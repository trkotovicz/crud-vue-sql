const { StatusCodes } = require('http-status-codes');
const clientService = require('../services/Client');

module.exports = {
  getById: async (req, res) => {
    const { id } = req.params;
    const user = await clientService.getById(id);
    res.status(StatusCodes.OK).json(user);
  },

  getAll: async (_req, res) => {
    const users = await clientService.getAll();
    res.status(StatusCodes.OK).json(users);
  },
};
