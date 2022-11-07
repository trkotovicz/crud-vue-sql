const { StatusCodes } = require('http-status-codes');
const userService = require('../services/User');
const jwtService = require('../utils/jwtService');

module.exports = {

  login: async (req, res) => {
    const user = await userService.login(req.body);
    const token = jwtService.createToken(user);
    res.status(StatusCodes.OK).json({ token, user });
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);
    res.status(StatusCodes.OK).json(user);
  },
};
