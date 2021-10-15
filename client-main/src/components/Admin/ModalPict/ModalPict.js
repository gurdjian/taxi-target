import React, { useEffect, useState }  from 'react'
import "react-hint/css/index.css";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import { updateRangeAction } from '../../../redux/actions/adminAction';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    position: 'absolute',
    clip: 'rect(0 0 0 0)',
    width: '1px',
    height: '1px',
    margin: '-1px',
    '&:checked + img': {
      borderColor: 'purple'
    },
  },
  root: {
    // width: '50%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    maxWidth: '900px',
    height: '700px',
    borderRadius: '5px',
    padding: '20px',
    paddingRight: 0,
    position: 'relative'
  },
  imageListItem: {
    width:  'calc(100%/4 - 14px)',
    marginRight: '10px',
    marginBottom: '10px',
    lineHeight: 0,
  },
  imageList: {
    flexWrap: 'wrap',
   display: 'flex',
   flexDirection: 'row',
   width: 'calc(100% + 10px)',
   marginRight: '-10px',
  },
  image: {
    width: '100%',
    height: 'auto',
    border: '2px solid transparent',
    transition: '.3s',
  },
  title: {
    // textTransform: 'uppercase'
    fontWeight: 'bold',
    fontSize: '22px',
    marginBottom: '20px',
  },
  wrapper: {
    paddingBottom: '30px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    height: '100%',
    position: 'relative',
  },
  form: {
    height: '100%',
  },
  bottom: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#FFF',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    borderTop: '1px solid #3f51b5'
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

function ModalPict({open, idRange, handleClose}) {
  const advertisement = useSelector(state => state.advertisement)
  const allAdsRedux = useSelector(state => state.allads);
  const [images, setImages] = useState([]);
  const ads = advertisement.find((elem) => elem.rangeId === idRange).ads;
  useEffect(()=> {
    const arr = [];
    ads.forEach(element => {
      arr.push({advertisement_id: element.id, range_id: idRange})
    });
    setImages(arr);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const picsId = ads.map( el => el.id);
  const allAds = allAdsRedux.filter((elem) => {
    // console.log(ads.indexOf(elem.id), elem);
    return picsId.indexOf(elem.id) < 0;
  })
  const dispatch = useDispatch();
  function formSubmitHandler(e) {
    e.preventDefault();
    // const images = Object.fromEntries( new FormData(e.target));
    console.log(images);
    dispatch(updateRangeAction(images, idRange));
    handleClose();
  }
  function switchHandler(id, checked) {
    console.log(id, checked);
    if (checked) {
      setImages( prev => {
        return [...prev, {advertisement_id: id, range_id: idRange}]
      });
    } else {
      setImages( prev => {
        return prev.filter( elem => elem.advertisement_id !== id);
      });
    }

  }
  // function check(id) {
  //   setImages( prev => {
      
  //     return [...prev].push({id, checked: true})
  //   });
  // }
  const classes = useStyles();
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
     
            <div className={classes.root}>
              <form className={classes.form} name="activeImages" onSubmit={formSubmitHandler}>
                <div className={classes.wrapper}>
                  <p className={classes.title}>Активные картинки</p>
                  <div className={classes.imageList}>
                    {ads.map((item, index) => {
                     
                      return (
                        <label className={classes.imageListItem} key={index}>  
                          <input className={classes.input} type="checkbox" onChange={(e) => switchHandler(item.id, e.target.checked)} name="images" defaultChecked value={item.id} /> 
                          <img className={classes.image} src={item.url} alt={item.url}/> 
                        </label>
                      )
                    })}
                  </div>
                  
                  <p className={classes.title}>Доступные картинки</p>
                  <div className={classes.imageList}>
                    {allAds.map((item, index) => (
                      <label className={classes.imageListItem} key={index}>  
                        <input className={classes.input} type="checkbox" onChange={(e) => switchHandler(item.id, e.target.checked)} name="images"  value={item.id} /> 
                        <img className={classes.image} src={item.url} alt={item.url}/> 
                      </label>
                    ))}
                  </div>
                </div>
                <div className={classes.bottom}>
                  <button className={'button'} type="submit">Изменить</button>
                </div>
              </form>
            </div>
       
          </Fade>
        </Modal>
 )
}

export default ModalPict
