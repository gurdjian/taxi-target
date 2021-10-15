import React, { useEffect } from 'react'
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
import { getAllRange } from '../../redux/actions/rangeAction';
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


function Karta() {

  const dispatch = useDispatch();

  const range = useSelector(state => state.range)

  useEffect(() => {
    dispatch(getAllRange())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

 

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [aplOpen, setaplOpen] = React.useState(false);

  const hendlerAplOpen = () => {
    setaplOpen(true);
  };

  const hendlerAplClose = () => {
    setaplOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let yymap
  function chooseColor(price) {
    switch (price) {
      case 100:
        return '#e4272750';
      case 95:
        return '#e4a12770'
      case 90:
        return '#e4cc2770'    
        case 50:
        return '#9ce42770'        
      default:
        return '#27d3e470'
    }
  }
  return (
    <YMaps
      query={{
        apikey: "955ab68e-76ba-4f52-97ee-11e1667f453b",
      }}
      version={"2.1"}
    >
      
        <div className={style.events__mapWrapper}>
          <Map
            className={style.events__map}
            instanceRef={(ref) => {
            }}
            onLoad={(ymaps) => {
              if (!yymap) {
                yymap = ymaps;
              }
            }}
            modules={["templateLayoutFactory", "layout.ImageWithContent", "geolocation", "geocode"]}
            defaultState={{ center: [55.75, 37.57], zoom: 11 }}
            onClick={(event) => {
              try {
                if (event?.get("coords")) {
                }
              } catch (error) {
                console.log("ERRORRRRR", error);
              }
            }}
          >
            <>
              {range?.map((el) => {
                return <Polygon
                  data-rh="Add top-level category"
                  geometry={[JSON.parse(el.zone_geo)]}
                  onClick={handleOpen}
                  options={{
                    fillColor: chooseColor(el.price),
                    // fillColor: '#ffff0022',
                    strokeColor: '#3caa3c88',
                    strokeWidth: 2,

                  }}
                  properties={{
                    hintContent: el.price
                  }}
                  modules={
                    ['geoObject.addon.hint']
                  }
                />
              })}
            </>
          </Map>
        </div>

        <div>

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
                  <TextField id="standard-basic" label="Имя" /> <br />
                  <TextField id="standard-basic" label="Номер телефона" /> <br />
                  <TextField id="standard-basic" label="Email" /> <br />
                  {/* <TextField id="standard-basic" label="Комментарий" /> <br /> */}
                  <div className={style.button}>
                  <Button variant="contained" color="primary" onClick={() => {
                    handleClose();
                    hendlerAplOpen();
                  }}>
                      Отправить </Button>
                  </div>
                </form>
           
              </div>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={aplOpen}
            onClose={hendlerAplClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={aplOpen}>
              <div className={classes.paper}>
                <h2>Ваша заявка успешно отправленна </h2>
              </div>
            </Fade>
          </Modal>

      </div>
    </YMaps >
  )
}

export default Karta
