import React, { useEffect } from 'react';
import style from './navbar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import { Link, useHistory } from "react-router-dom"
import { googleCheckAuth, logoutUser } from '../../redux/actions/userAction';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {

  const dispatch = useDispatch();

  const history = useHistory();

  const user = useSelector(state => state.user);

  const logoutHandler = () => {
    dispatch(logoutUser())
    console.log(document.cookie);
    history.push('/')
  }

//   function deleteAllCookies() {
//     var cookies = document.cookie.split(";");

//     for (var i = 0; i < cookies.length; i++) {
//         var cookie = cookies[i];
//         var eqPos = cookie.indexOf("=");
//         var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
//         document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
//     }
// }
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        {user &&
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Link to="/" className={style.super_puper_link}>
                <LocalTaxiIcon />
              </Link>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Taxi-target
          </Typography>
            <Link className={style.super_puper_link} to="сabinet"><Button color="inherit">Личный кабинет</Button></Link>
            <Link className={style.super_puper_link} to="karta"><Button color="inherit">Карта</Button></Link>
            <Button onClick={logoutHandler} color="inherit">Выйти</Button>
          </Toolbar>
        }
        {!user &&
          < Toolbar >
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <LocalTaxiIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Taxi-target
      </Typography>
            <Link className={style.super_puper_link} to="/signin"><Button color="inherit">Войти</Button></Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/signup"><Button color="inherit">Зарегистрироваться</Button></Link>
          </Toolbar>
        }
      </AppBar>
    </div >
  )
}

export default Navbar;
