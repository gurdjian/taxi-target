const router = require('express').Router();
const fileMiddleware = require('../middleware/file')
// router.post('/upload', (req, res) => {
//   console.log('hello');
// })

// fileMiddleware.single('file'), 

router.post('/upload', fileMiddleware.single('file'), (req, res) => {
 console.log('on back');
  try {
    console.log('gfgf');
    res.sendStatus(200)
  } catch (error) {
    console.log('-----------------------gfgf');
    console.log(error);
  }
})
 

module.exports = router;
