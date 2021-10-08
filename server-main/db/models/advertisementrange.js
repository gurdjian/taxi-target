'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdvertisementRange extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Purchase_hirtory }) {
      this.hasMany(Purchase_hirtory, {
        foreignKey: 'advertisementRange_id',
      });
    }
  };
  AdvertisementRange.init({
    advertisement_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    range_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'AdvertisementRange',
  });
  return AdvertisementRange;
};