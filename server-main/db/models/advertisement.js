'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Advertisement.init({
    url: DataTypes.STRING,
    time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Advertisement',
  });
  return Advertisement;
};