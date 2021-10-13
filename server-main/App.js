require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session)
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(morgan('dev'));
app.use(multer({ dest: 'uploads' }).single('filedata'));

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))
app.use(cors({ credentials: true, origin: process.env.ORIGIN, sameSite: false }));


const sessionConfig = {
  store: new FileStore({ path: './sessions' }),
  key: 'sid',
  secret: process.env.SALT,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    expires: 24 * 60 * 60e3,
    httpOnly: false,
    sameSite: false
  },
};

app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session(sessionConfig))
//Здесь подключаем роуты
const uploadsRouter = require('./routes/uploadsRouter');
const mapRouter = require('./routes/mapRouter');
const userRouter = require('./routes/userRouter')
const googleUserRouter = require('./routes/googleUserRouter')
const depositsUserRouter = require('./routes/depositsUserRouter')
const adminRouter = require('./routes/adminRouter');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.GOOGLE_REDIRECT_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile)
    }
  )
)
//Здесь прописываем роуты
app.get('/', (req, res) => {
  res.render('index')
})
app.use('/user', userRouter)
app.use('/karta', mapRouter)
app.use('/googleUser', googleUserRouter)
app.use('/upload', uploadsRouter);
app.use('/deposits', depositsUserRouter);
app.use('/admin', adminRouter)

app.listen(PORT, () => {
  console.log('Server-main start on port', PORT);
});
