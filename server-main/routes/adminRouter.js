require('dotenv').config();
const router = require('express').Router();
const passport = require('passport');
const { Advertisement, User, Range } = require('../db/models');

router.post('/advertisement', async (req, res) => {
  const userId = req.session.user.id;
  if (userId) {
    let advertisements = await Advertisement.findAll({ include: Range });
    advertisements = advertisements.map((el) => {
      return { rangeId: el.Ranges[0].id, url: el.url, time:el.time, user_id: el.user_id}
    })
    console.log(advertisements);
    return res.json(advertisements);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;