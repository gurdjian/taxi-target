require('dotenv').config();
const router = require('express').Router();
const passport = require('passport');
const { Advertisement, User } = require('../db/models');

router.post('/picture', async (req, res) => {
  const userId = req.session.user.id;
  if (userId) {
    const picture = await Advertisement.findAll({ include: User });
    console.log(picture);
    return res.json(picture);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;