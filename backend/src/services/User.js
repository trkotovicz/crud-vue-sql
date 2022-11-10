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

const getById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    const error = new Error('User not found');
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  return user;
};

const getAll = async () => {
  const users = await User.findAll();
  if (!users) {
    const error = new Error('No user found');
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  return users;
};

module.exports = { login, getById, getAll };
