/* eslint-disable object-property-newline */
const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const { Client } = require('../db/models');
const { validateUser, validateCpf } = require('../utils/validations');

const create = async (data) => {
  const { name, email, cpf, address, addressNumber, 
    addressComplement, district, zip, city, state } = data;
  validateUser(data);
  validateCpf(cpf);

  const [user, created] = await Client.findOrCreate({
    where: { [Op.or]: { name, email, cpf } },
    defaults: { name, email, cpf, address, addressNumber,
      addressComplement, district, zip, city, state },
  });

  if (!created) {
    const error = new Error('Client already exists');
    error.name = 'ConflictError';
    error.status = StatusCodes.CONFLICT;
    throw error;
  }
  return user;
};

const getById = async (id) => {
  const client = await Client.findByPk(id);
  if (!client) {
    const error = new Error('Client not found');
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  return client;
};

const getAll = async () => {
  const clients = await Client.findAll();
  if (!clients) {
    const error = new Error('No client found');
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  return clients;
};

module.exports = { create, getById, getAll };