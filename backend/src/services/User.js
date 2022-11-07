const md5 = require('md5');
const { StatusCodes } = require('http-status-codes');
const { User } = require('../db/models');
const { validateLogin } = require('../utils/validations');

const login = async ({ email, password }) => {
  validateLogin({ email, password });
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== md5(password)) {
    const error = new Error('Usuário ou senha incorreta.');
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};

module.exports = { login };
