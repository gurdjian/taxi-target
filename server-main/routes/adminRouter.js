require('dotenv').config();
const router = require('express').Router();
const passport = require('passport');
const { Advertisement, Range, AdvertisementRange } = require('../db/models');

router.get('/allads', async (req, res) => {
  // const userId = req.session.user.id;
  // if (userId) {
    let advertisements = await Advertisement.findAll();
    advertisements = advertisements.map((el) => {
      return { id:el.id, url: el.url, time:el.time, user_id: el.user_id}
      // return { rangeId: el.Ranges[0].id, url: el.url, time:el.time, user_id: el.user_id}
    })
    // console.log(advertisements);
    return res.json(advertisements);
  // } else {
  //   res.sendStatus(401);
  // }
});

router.get('/ads', async (req, res) => {
  let ranges = await Range.findAll({
    include: [{
      model: Advertisement
    }],
  });
  ranges = ranges.map((range) => {
    const {id, price, Advertisements} = range;
    const advertisements = Advertisements.map( (ads) => {
      const {id, url, time} = ads;
      return {id, url, time};
    })
    return { rangeId: id, price, ads: advertisements}
  })
  return res.json(ranges);
});

router.post('/update', async (req, res) => {
  const { images, rangeId } = req.body;
  console.log(' === images = ', images);
  await AdvertisementRange.destroy({where: {range_id: rangeId}});
  AdvertisementRange.bulkCreate(images)
  .then(console.log)
  .catch(console.log);
  return res.json('OK');
});

module.exports = router;
