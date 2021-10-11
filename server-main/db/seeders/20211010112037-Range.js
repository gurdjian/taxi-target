const fs = require('fs').promises;
const path = require('path');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    let range = await fs.readFile(path.join(__dirname, '../', 'range.geojson'), 'utf-8');
    range = JSON.parse(range)
    range = range.features
    console.log(range[2].geometry.coordinates);
    for (let i = 0; i < range.length; i++) {
      await queryInterface.bulkInsert('Ranges', [{
        zone_geo: JSON.stringify(range[i].geometry.coordinates[0]),
        price: +range[i].properties.description.replace(' р/с', ''),
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
      
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
