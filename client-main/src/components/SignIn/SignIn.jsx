import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router';
import { signInUser } from '../../redux/actions/userAction';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
  avatar: {
    backgroundColor: '#0066CC'
  }
}));

function SignIn() {

  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const history = useHistory();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [user])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signInUser(form))
  }


  const classes = useStyles();
  function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    // var id_token = googleUser.getAuthResponse().id_token;
    // console.log("ID Token: " + id_token);
  }

  // useEffect(() => {
  //   const _onInit = auth2 => {
  //     console.log('init OK', auth2)
  //   }
  //   const _onError = err => {
  //     console.log('error', err)
  //   }
  //   window.gapi.load('auth2', function () {
  //     window.gapi.auth2
  //       .init({ // не забудьте указать ваш ключ в .env
  //         client_id:
  //           '853991408733-56a8d01h2qng6e3k1kqkk2setucvtnrr',
  //       })
  //       .then(_onInit, _onError)
  //   })
  // }, [])
  // const signIn = () => {
  //   const auth2 = window.gapi.auth2.getAuthInstance()
  //   auth2.signIn().then(googleUser => {

  //     // метод возвращает объект пользователя
  //     // где есть все необходимые нам поля
  //     const profile = googleUser.getBasicProfile()
  //     console.log('ID: ' + profile.getId()) // не посылайте подобную информацию напрямую, на ваш сервер!
  //     console.log('Full Name: ' + profile.getName())
  //     console.log('Given Name: ' + profile.getGivenName())
  //     console.log('Family Name: ' + profile.getFamilyName())
  //     console.log('Image URL: ' + profile.getImageUrl())
  //     console.log('Email: ' + profile.getEmail())
  //     if (profile.getEmail()) {

  //     }
  //     // токен
  //     const id_token = googleUser.getAuthResponse().id_token
  //     console.log('ID Token: ' + id_token)
  //   })
  // }
  // const signOut = () => {
  //   const auth2 = window.gapi.auth2.getAuthInstance()
  //   auth2.signOut().then(function() {
  //     console.log('User signed out.')
  //   })
  // }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocalTaxiIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Войти
      </Typography>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            onChange={changeHandler}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={changeHandler}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            onChange={changeHandler}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Войти
        </Button>
          <Button
            onChange={changeHandler}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          > Авторизируйтесь через google
           <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
        </Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
    // {/* <div className="App">
    //         <header className="App-header">
    //           <button onClick={signIn}>Log in</button>
    //           <button onClick={signOut}>Log out</button>
    //         </header>
    //       </div> */}
  )
}

export default SignIn
