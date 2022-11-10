'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        name: 'Bruce Wayne',
        email: 'bruce@wayneenterprises.com',
        password: 'd1ebaaac13d8a73b0cbf1b8e99c329dd', // imbatman
      },
      {
        name: 'Peter Parker',
        email: 'peterspider@marvel.com',
        password: '9f05aa4202e4ce8d6a72511dc735cce9', // spiderman
      },
      {
        name: 'Tony Stark',
        email: 'ironman@stark.com',
        password: '4910ff4aeafbe9614bcf5115bfd92364', // !r0nman
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
