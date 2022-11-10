const { StatusCodes } = require('http-status-codes');
const { Client } = require('../db/models');

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

module.exports = { getById, getAll };