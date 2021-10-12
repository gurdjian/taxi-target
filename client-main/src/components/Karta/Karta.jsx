import React, { useEffect, useState } from 'react'
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
import ReactHintFactory from 'react-hint'
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
  console.log(range);

  useEffect(() => {
    dispatch(getAllRange())
  }, [])

  // const [drag, setDrag] = useState(false);

  // const dragStartHandler = (e) => {
  //   e.preventDefault();
  //   setDrag(true);
  // }

  // const dragLeaveHandler = (e) => {
  //   e.preventDefault();
  //   setDrag(false);
  // }

  // const onDropHandler = (e) => {
  //   e.preventDefault();
  //   let files = [...e.dataTransfer.files]
  //   console.log(files);
  //   const formData = new FormData();
  //   formData.append('file', files[0])
  //   setDrag(false)
  // }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let yymap

  return (
    <YMaps
      query={{
        apikey: "955ab68e-76ba-4f52-97ee-11e1667f453b",
      }}
      version={"2.1"}
    >
      <div>
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
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
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
                    fillColor: '#ffff0022',
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

            {/* <Polygon
              data-rh="Add top-level category"
              geometry={[[
                [55.75, 37.80],
                [55.80, 37.90],
                [55.75, 38.00],
                [55.70, 38.00],
                [55.70, 37.80]
              ]]
              }
              onClick={handleOpen}
              options={{
                fillColor: '#ffff0022',
                strokeColor: '#3caa3c88',
                strokeWidth: 7,

              }}
              properties={{
                balloonContent: 'Это балун',
                hintContent: ' Sexy '
              }}
              modules={
                ['geoObject.addon.balloon', 'geoObject.addon.hint']
              }
            >
            </Polygon>  */}

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
                  <TextField id="standard-basic" label="Комментарий" /> <br />
                  <div className={style.button}>
                    <Button variant="contained" color="primary">
                      Отправить </Button>
                  </div>
                </form>
                {/* <h2 id="spring-modal-title">Vyberite chtoto</h2> */}
                {/* <p id="spring-modal-description">react-spring animates me.</p> */}
                {/* <label>
                    eto knopka ebanaya dlya faila
    <input type="file" style={{ visibility: 'hidden' }} />
                  </label>

                  <div className={classes.app}>
                    {drag
                      ? <div
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                        className={classes.drop_area}>Отпустите файлы, чтобы загрузить их</div>
                      : <div
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                      >Перетащите файлы, чтобы загрузить их</div>}
                  </div> */}
              </div>
            </Fade>
          </Modal>
        </div>

      </div>

    </YMaps >
  )
}

export default Karta
