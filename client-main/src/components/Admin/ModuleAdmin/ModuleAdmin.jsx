import React, { useEffect, useState }  from 'react'
import "react-hint/css/index.css";
import {
  YMaps,
  Map,
  Polygon,
} from "react-yandex-maps";
import style from './karta.module.css'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRange } from '../../../redux/actions/rangeAction';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'honeydew',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8, 10, 25),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app: {
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    padding: '20px'
  },
  drop_area: {
    width: '88px',
    height: '88px',
    border: '2px dashed mediumblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });
  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function ModuleAdmin({idRange }) {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                  <h2 id="spring-modal-title">Контакты</h2>
                  <h2>{ idRange }</h2>
                  <TextField id="standard-basic" label="Имя" /> <br />
                  <TextField id="standard-basic" label="Номер телефона" /> <br />
                  <TextField id="standard-basic" label="Email" /> <br />
                  <TextField id="standard-basic" label="Комментарий" /> <br />
                  <div className={style.button}>
                    <Button variant="contained" color="primary">
                      Отправить </Button>
                  </div>
                </form>
              </div>
            </Fade>
          </Modal>
  )
}
