'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        name: 'Rick Sanchez',
        birthDate: '1952-12-10',
        cpf: '31415926535',
        address: 'Dimension C',
        addressNumber: 137,
        district: 'District 1',
        zip: 98101001,
        city: 'Seattle',
        state: 'Washington',
        email: 'rickzinho@c137.com',
        password: 'c86274dae79490b443cce10b45c54a68', // Wubba lubba dub-dub
      },
      {
        name: 'Morty Smith',
        birthDate: '2004-07-13',
        cpf: '16900196001',
        address: 'The Wubba Lubba Dub Dub of Wall Street',
        addressNumber: 12,
        district: 'District 1',
        zip: 98101001,
        city: 'Seattle',
        state: 'Washington',
        email: 'morty69@c137.com',
        password: '4ef7af3278eec146dc3b964559cc3c6c', // Oh, geez.. f* Rick
      },
      {
        name: 'Homer Jay Simpson',
        birthDate: '1956-05-12',
        cpf: '79645300600',
        address: 'Evergreen Terrace',
        addressNumber: 632,
        district: 'Liberty Heights',
        zip: 97403123,
        city: 'Springfield',
        state: 'Oregon',
        email: 'homer@family-simpson.com',
        password: '1951ee5a935cc091b71292423ea08f67', // A culpa é minha e coloco em quem quiser!
      },
      {
        name: 'Lisa Marie Simpson',
        birthDate: '1982-05-09',
        cpf: '38202483824',
        address: 'Evergreen Terrace',
        addressNumber: 632,
        district: 'Liberty Heights',
        zip: 97403123,
        city: 'Springfield',
        state: 'Oregon',
        email: 'lisa@family-simpson.com',
        password: '16f20283517073a6efa21ab872fd4238', // Todo o maldito sistema está errado!
      },
      {
        name: 'Marjorie Jacqueline Bouvier Simpson',
        birthDate: '1956-10-23',
        cpf: '6600035469',
        address: 'Evergreen Terrace',
        addressNumber: 632,
        district: 'Liberty Heights',
        zip: 97403123,
        city: 'Springfield',
        state: 'Oregon',
        email: 'marge@family-simpson.com',
        password: '70176dced5f45aa6389af725e7e37a03', // Mmmmm!!!
      },
      {
        name: 'Bartholomew J. Bouvier Simpson',
        birthDate: '1980-04-01',
        cpf: '42838420283',
        address: 'Evergreen Terrace',
        addressNumber: 632,
        district: 'Liberty Heights',
        zip: 97403123,
        city: 'Springfield',
        state: 'Oregon',
        email: 'bart@@family-simpson.com',
        password: '1eb35b2d1235b7b938b996f247107053', // Eu não vou xerocar meu traseiro
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
