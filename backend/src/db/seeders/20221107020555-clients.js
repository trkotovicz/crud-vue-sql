'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('clients',
    [
      {
        name: 'Homer Jay Simpson',
        cpf: '79645300600',
        address: 'Evergreen Terrace',
        addressNumber: 632,
        district: 'Liberty Heights',
        zip: 97403123,
        city: 'Springfield',
        state: 'Oregon',
        kinship: 'Abraham Jedediah Simpson II',
        email: 'homer@familysimpson.com',
      },
      {
        name: 'Lisa Marie Simpson',
        cpf: '38202483824',
        address: 'Evergreen Terrace',
        addressNumber: 632,
        district: 'Liberty Heights',
        zip: 97403123,
        city: 'Springfield',
        state: 'Oregon',
        kinship: 'Marjorie Jacqueline Bouvier Simpson',
        email: 'lisa@familysimpson.com',
      },
      {
        name: 'Marjorie Jacqueline Bouvier Simpson',
        cpf: '6600035469',
        address: 'Evergreen Terrace',
        addressNumber: 632,
        district: 'Liberty Heights',
        zip: 97403123,
        city: 'Springfield',
        state: 'Oregon',
        kinship: 'Jackie Bouvier',
        email: 'marge@familysimpson.com',
      },
      {
        name: 'Bartholomew J. Bouvier Simpson',
        cpf: '42838420283',
        address: 'Evergreen Terrace',
        addressNumber: 632,
        district: 'Liberty Heights',
        zip: 97403123,
        city: 'Springfield',
        state: 'Oregon',
        kinship: 'Marjorie Jacqueline Bouvier Simpson',
        email: 'bart@@familysimpson.com',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('clients', null, {}),
};
