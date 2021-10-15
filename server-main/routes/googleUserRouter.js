require('dotenv').config();
const router = require('express').Router();
const passport = require('passport');
const { v4: uuidv4 } = require('uuid');
const { User } = require('../db/models');

router.get('/main', async (req, res) => {
  if (req?.session?.passport) {
    res.locals.name = req.session.passport.user.displayName;
  }
  res.render('main');
});

router.get('/signIn',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
    prompt : "select_account",
  })
)

router.get('/signIn/callback',
//  ()=>{console.log( console.log(process.env.ORIGIN));},
  passport.authenticate('google', {
    failureRedirect: '/signIn',
    successRedirect: `${process.env.ORIGIN}`,
  })
);

router.get('/logOut', async (req, res) => {
  req.session.destroy();
  req.logout();
  // res.clearCookie('sId').json('OK');
  res.clearCookie('*', {path: '/'}).json('OK');

});

router.get('/checkAuth', async (req, res) => {
  if (req?.user) {
    try {
      const profile = req.user;
      const findUser = await User.findOne({ where: { email: profile.emails[0].value } });
      console.log(findUser);
      if (profile.emails[0].value === findUser?.email) {
        return res.json(findUser);
      }
      console.log(req.user);
      const newUser = await User.create({
        email: profile.emails[0].value,
        name: profile.name.givenName,
        password: uuidv4()
      });
      return res.json(newUser);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
});

module.exports = router;
