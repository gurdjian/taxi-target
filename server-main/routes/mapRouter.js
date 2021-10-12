const router = require('express').Router();
const { Range } = require('../db/models')

router.route('/')
.get(async(req, res) => {
  const allRange = await Range.findAll()
  res.json(allRange)
})

module.exports = router
