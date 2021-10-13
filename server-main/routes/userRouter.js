const router = require('express').Router()
const bycrypt = require('bcrypt')
const { User } = require('../db/models')

router.route('/')
  .get(async (req, res) => {
    res.json({})
  })

router.route('/signin')
  .post(async (req, res) => {
    const { email, password } = req.body
    console.log(req.body);
    if (email, password) {
      const user = await User.findOne({ where: { email } })
      if (user && await bycrypt.compare(password, user.password)) {
        req.session.user = { name: user.name, id: user.id }
        return res.json({ name: user.name, id: user.id })
      } else {
        return res.sendStatus(401)
      }
    } else {
      return res.sendStatus(401)
    }
  })


router.route('/signup')
  .post(async (req, res) => {
    console.log(req.body.login)
    const { login, email, password } = req.body
    if (login && email && password) {
      console.log('success');
      const pass = await bycrypt.hash(password, 10)
      const newUser = await User.create({ name: login, email, password: pass })
      req.session.user = { name: newUser.name, id: newUser.id }
      return res.json({ name: newUser.name, id: newUser.id })
    } else {
      return res.sendStatus(401)
    }
  })

router.route('/check')
  .post((req, res) => {
    console.log('---', req.session.user)
    if (req.session.user) {
      return res.json(req.session.user)
    }
    res.sendStatus(401)
  })

router.route('/logout')
  .get((req, res) => {
    req.session.destroy()
    res.clearCookie('sid').sendStatus(200)
  })

module.exports = router
