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

    const loginWithGoogle = (e) => {
      e.preventDefault();
      window.open(`${process.env.REACT_APP_URL}/googleUser/signIn`, '_self')
    }

    const [form, setForm] = useState({});

    console.log(form);

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
              value={form.email || ''}
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
              value={form.password || ''}
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
              onClick={loginWithGoogle}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Авторизируйтесь через google
              
            </Button>
          </form>
        </div>
        <Box mt={8}>
        </Box>
      </Container>
    );
  }

  export default SignIn
