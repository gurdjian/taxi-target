require('dotenv').config();
const router = require('express').Router();
const passport = require('passport');
const { User } = require('../db/models');

router.post('/wallet', async (req, res) => {
  const userId = req.session.user.id;
  if (userId) {
    const user = await User.findByPk(userId);
    console.log(user);
    return res.json(user.wallet);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
