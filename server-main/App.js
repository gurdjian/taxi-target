require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;

const PORT = process.env.PORT;
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(multer({ dest: 'uploads' }).single('filedata'));

const uploadsRouter = require('./routes/uploadsRouter');




app.get('/', (req, res) => {
  res.render('index')
})

app.use('/upload', uploadsRouter);




app.listen(PORT, () => {
  console.log('srever started PORT');
});
