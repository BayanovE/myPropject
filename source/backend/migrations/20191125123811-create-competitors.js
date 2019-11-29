'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Competitors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      secondName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      club: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      city: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      birthDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      sex: {
        type: Sequelize.ENUM('male', 'female'),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Competitors');
  }
};