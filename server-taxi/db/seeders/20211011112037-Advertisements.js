const fs = require('fs');

module.exports = {
  up: async (queryInterface) => {
    const { ads } = JSON.parse(fs.readFileSync(`${process.env.PWD}/db/db.json`, 'utf-8'));

    // id: "id"
    // user_id: ???
    // url: "url"
    // time: "duration"

    const arrToDb = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < ads.length; i++) {
      const { id, url, time}
      arrToDb.push({
        id,
        url
      });
    }
    await queryInterface.bulkInsert('Ranges', arrToDb, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Ranges', null, {});
  },
};
