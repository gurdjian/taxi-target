const fs = require('fs');

module.exports = {
  up: async (queryInterface) => {
    const { ads } = JSON.parse(fs.readFileSync(`${process.env.PWD}/db/db.json`, 'utf-8'));

    let arrToDb = [
      'danila.png',
      'dasha.png',
      'enduro.png',
      'gosha.png',
      'nogti.png',
      'pizza.png',
      'rolf.png',
      'savel.png',
      'sem.png',
      'anton.png',
    ];
    arrToDb = arrToDb.map((elem, index) => ({
      id: index + 1,
      user_id: 2,
      url: `/img/${elem}`,
      time: 5,
    }));
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < ads.length; i++) {
      const { id, url, duration } = ads[i];
      arrToDb.push({
        id: +id + 10,
        user_id: 2,
        url,
        time: duration,
      });
    }
    console.log(arrToDb);
    await queryInterface.bulkInsert('Advertisements', arrToDb, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Advertisements', null, {});
  },
};
