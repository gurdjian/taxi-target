require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT;
const app = express();




app.use(express.json());
app.use(morgan('dev'));
app.use(cors());




app.listen(PORT, () => {
  console.log('srever started PORT', 3000);
});
