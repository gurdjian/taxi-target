'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Range extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Advertisement }) {
      // define association here
      this.belongsToMany(Advertisement, {
        through: 'AdvertisementRange',
        foreignKey: 'range_id',
        otherKey: 'advertisement_id'
      });
    }
  };
  Range.init({
    zone_geo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Range',
  });
  return Range;
};