'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cities', [{
        code: 66,
        name: 'Екатеринбург',
        createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        code: 45,
        name: 'Челябинск',
        createdAt: new Date(),
      updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};