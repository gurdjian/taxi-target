const fs = require('fs');

module.exports = {
  up: async (queryInterface) => {
    const { ads } = JSON.parse(fs.readFileSync(`${process.env.PWD}/db/db.json`, 'utf-8'));

    const arrToDb = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < ads.length; i++) {
      const { id, url, duration } = ads[i];
      arrToDb.push({
        id,
        user_id: 2,
        url,
        time: duration,
      });
    }
    await queryInterface.bulkInsert('Advertisements', arrToDb, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Advertisements', null, {});
  },
};
