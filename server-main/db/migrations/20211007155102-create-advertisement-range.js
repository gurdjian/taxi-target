'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AdvertisementRanges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      advertisement_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Advertisements',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      range_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Ranges',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AdvertisementRanges');
  }
};
