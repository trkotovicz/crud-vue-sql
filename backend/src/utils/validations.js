const { cpf } = require('cpf-cnpj-validator');
const joi = require('joi');

module.exports = {
  validateLogin: (data) => {
    const schema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().min(8).required(),
    }).required().label('loginData');

    const { error, value } = schema.validate(data);
    if (error) {
      error.name = 'ValidationError';
      error.status = 400;
      throw error;
    }
    return value;
  },

  validateRegister: (data) => {
    const schema = joi.object({
      name: joi.string().min(6).required(),
      email: joi.string().email().required(),
      password: joi.string().min(8).required(),
    }).required().label('loginRegister');

    const { error, value } = schema.validate(data);
    if (error) {
      error.name = 'ValidationError';
      error.status = 400;
      throw error;
    }
    return value;
  },

  validateCpf: (data) => {
    const isValid = cpf.isValid(data);
    if (!isValid) {
      const error = new Error('invalidCPF');
      error.name = 'ValidationError';
      error.status = 400;
      throw error;
    }
  },
  
  validateUser: (data) => {
    const schema = joi.object({
      name: joi.string().required(),
      birthDate: joi.date().required(),
      cpf: joi.string().length(11).required(),
      address: joi.string().required(),
      addressNumber: joi.number().integer().positive().required(),
      addressComplement: joi.string(),
      district: joi.string().required(),
      zip: joi.string().length(8).required(),
      city: joi.string().required(),
      state: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().min(8).required(),
    });

    const { error, value } = schema.validate(data);
    if (error) {
      error.name = 'ValidationError';
      error.status = 400;
      throw error;
    }
    return value;
  },
};
