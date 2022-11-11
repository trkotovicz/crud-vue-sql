/* eslint-disable object-property-newline */
const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const { Client } = require('../db/models');
const { validateClient, validateCpf, validateClientUpdate } = require('../utils/validations');

const create = async (data) => {
  const { name, email, cpf, address, addressNumber, 
    addressComplement, district, zip, city, state, kinship } = data;
  validateClient(data);
  validateCpf(cpf);

  const [user, created] = await Client.findOrCreate({
    where: { [Op.or]: { name, email, cpf } },
    defaults: { name, email, cpf, address, addressNumber,
      addressComplement, district, zip, city, state, kinship },
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
  return clients;
};

const remove = async (id) => {
  const client = await Client.destroy({ where: { id } });
  if (!client) {
    const error = new Error('No client found');
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  return client;
};

const update = async (data, id) => {
  const { address, addressNumber, addressComplement,
    district, zip, city, state } = data;
    validateClientUpdate(data);

  const [client] = await Client.update(
    { address, addressNumber, addressComplement, district, zip, city, state },
    { where: { id } },
  );

  if (!client) {
    const error = new Error('Client not found');
    error.name = 'NotFoundError';
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }

  return {
    id,
    address: data.address,
    addressNumber: data.addressNumber,
    addressComplement: data.addressComplement,
    district: data.district,
    zip: data.zip,
    city: data.city,
    state: data.state
  };
};

module.exports = { create, getById, getAll, remove, update };