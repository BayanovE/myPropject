'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define('Cities', {
    name: DataTypes.STRING,
    code: DataTypes.INTEGER,
  }, {});
  Cities.associate = function(models) {
    // associations can be defined here
  };
  return Cities;
};