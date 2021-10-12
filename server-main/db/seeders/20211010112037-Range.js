const fs = require('fs').promises;
const path = require('path');

module.exports = {
  up: async (queryInterface) => {
    let range = await fs.readFile(path.join(__dirname, '../', 'range.geojson'), 'utf-8');
    range = JSON.parse(range);
    range = range.features;
    console.log(range[2].geometry.coordinates);
    const arrToDb = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < range.length; i++) {
      const zone_geo = range[i].geometry.coordinates[0].map((elem) => [elem[1], elem[0]]);
      arrToDb.push({
        zone_geo: JSON.stringify(zone_geo),
        price: +range[i].properties.description.replace(' р/с', ''),
      });
    }
    await queryInterface.bulkInsert('Ranges', arrToDb, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Ranges', null, {});
  },
};
