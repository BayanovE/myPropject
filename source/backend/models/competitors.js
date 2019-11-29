'use strict';
module.exports = (sequelize, DataTypes) => {
  const Competitor = sequelize.define('Competitor', {
    surname: DataTypes.STRING,
    name: DataTypes.STRING,
    secondName: DataTypes.STRING,
    club: DataTypes.INTEGER,
    city: DataTypes.INTEGER,
    birthDate: DataTypes.DATE,
    sex: DataTypes.ENUM('male', 'female'),
  }, {});
  Competitor.associate = function(models) {
    // associations can be defined here
  };
  return Competitor;
};