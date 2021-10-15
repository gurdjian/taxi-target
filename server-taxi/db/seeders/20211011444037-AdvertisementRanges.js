module.exports = {
  up: async (queryInterface) => {
    const rangesId = [3, 4, 5, 6, 8, 12, 13, 25, 30, 31, 32];
    const advertisementId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
    const arrToDb = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rangesId.length; i++) {
      arrToDb.push({
        id: i + 1,
        range_id: rangesId[i],
        advertisement_id: advertisementId[i],
      });
    }
    await queryInterface.bulkInsert('AdvertisementRanges', arrToDb, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('AdvertisementRanges', null, {});
  },
};
