import React from 'react';
import './navbar.module.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import { Link } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {

  const classes = useStyles();
  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LocalTaxiIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Taxi-target
      </Typography>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/signIn"><Button color="inherit">Войти</Button></Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/signUp"><Button color="inherit">Зарегистрироваться</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
    // <div className={classes.root}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //         <LocalTaxiIcon />
    //       </IconButton>
    //       <Typography variant="h6" className={classes.title}>
    //         Taxi-target
    //     </Typography>
    //       <Link style={{ textDecoration: 'none', color: 'white' }} to="karta"><Button color="inherit">Карта</Button></Link>
    //       <Link style={{ textDecoration: 'none', color: 'white' }} to="history"><Button color="inherit">История</Button></Link>
    //       <Button color="inherit">Выйти</Button>
    //     </Toolbar>
    //   </AppBar>
    // </div>
  )
}

export default Navbar;
