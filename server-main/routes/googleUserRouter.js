require('dotenv').config();
const router = require('express').Router();
const passport = require('passport');
const { User } = require('../db/models');

router.get('/main', async (req, res) => {


  if (req?.session?.passport) {
    res.locals.name = req.session.passport.user.displayName;
  }
  res.render('main');


});


router.get(
  '/signIn',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
)

router.get(
  '/signIn/callback',
  passport.authenticate('google', {
    failureRedirect: '/signIn',
    successRedirect: `${process.env.ORIGIN}`,
  })
);

router.get('/logOut', (req, res) => {
  req.session.destroy();
  res.clearCookie('sId').json({ fucker: 'FATHERFUCKER' })

});

router.get('/checkAuth', async (req, res) => {
  if (req?.user) {
    try {
      const findUser = await User.findOne({ where: { email: req?.user.emails[0].value } });
      if (req?.user.emails[0].value === findUser?.email) {
        return res.json(findUser);
      }
      const newUser = await User.create({
        email: req.user.emails[0].value,
        firstname: req.user.name.givenName,
        lastname: req.user.name.familyName,
        avatar: req.user.photos[0].value,
      });
      return res.json(newUser);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
});

module.exports = router;
