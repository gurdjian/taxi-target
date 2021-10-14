import React, { useEffect, useState }  from 'react'
import "react-hint/css/index.css";
import {
  YMaps,
  Map,
  Polygon,
} from "react-yandex-maps";
import style from './karta.module.css'
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRange } from '../../../redux/actions/rangeAction';
import { getAds, getAllAdvertisement } from '../../../redux/actions/adminAction';
import ModalPict from '../ModalPict/ModalPict';
// import Uploads from '../Uploads/Uploads';

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

function KartaAdmin() {

  const dispatch = useDispatch();

  const range = useSelector(state => state.range)

  useEffect(() => {
    dispatch(getAllRange())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllAdvertisement())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAds())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [idRange, setidRange] = useState(0);

  const [open, setOpen] = React.useState(false);

  const handleOpen = (idRange) => {
    setidRange(idRange)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  let yymap;
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
              console.log("ERROR", error);
            }
          }}
        >
          <>
            {range?.map((el, index) => {
              return <Polygon
                data-rh="Add top-level category"
                geometry={[JSON.parse(el.zone_geo)]}
                onClick={() => handleOpen(el.id)}
                options={{
                  fillColor: chooseColor(el.price),
                  strokeColor: '#3caa3c88',
                  strokeWidth: 2,

                }}
                key={index + 1}
                properties={{
                  hintContent: el.id
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
    </div>
    {open && 
      <ModalPict 
      open={open}
      idRange={idRange}
      handleClose={handleClose}
      />}
    </YMaps >
  )
}

export default KartaAdmin



