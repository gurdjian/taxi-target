const router = require('express').Router();
const { Advertisement } = require('../db/models')
const fs = require('fs/promises')

router.post('/', async (req, res) => {
  let filedata = req.file;
  const filename = `photo_${new Date}`
  console.log(filedata);
  if (!filedata) {
    res.send('Ошибка при загрузке');
  }
  else
    await fs.rename(`./uploads/${req.file.filename}`, `./uploads/photo_${filename}`, err => {
      if (err) throw err;
      console.log(`rename - ${req.file.filename}e completed!`);
    })
  
    await Advertisement.create({user_id: 1, url: filename, time: 15 })
    
  res.send('Файл загружен');
});

module.exports = router;