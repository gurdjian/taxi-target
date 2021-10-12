'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ AdvertisementRange }) {
      this.belongsTo(AdvertisementRange, {
        foreignKey: 'advertisementRange_id',
      });
    }
  };

  Purchase_history.init({
    advertisementRange_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Purchase_history',
  });
  return Purchase_history;
};
