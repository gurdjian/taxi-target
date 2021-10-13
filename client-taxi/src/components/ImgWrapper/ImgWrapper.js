/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateUrlSaga} from '../../redux/actions/sagaActions'

function ImgWrapper() {
  const ads = useSelector( state => state.ads);
  const dispatch = useDispatch();
  
  // console.log(`===> render ${Date.now()}. ads = ${JSON.stringify(ads)} ads.duration = ${ads.duration}`);   
  useEffect(() => {
      let timerId;
      // console.log(`===> useEffect2 ${new Date()}`, 'ads.duration = ', ads.duration * 1000);
      if (ads.duration > 0) {
        timerId = setTimeout( () => {
          var options = { hour: 'numeric', minute: 'numeric', second: 'numeric'};
          console.log(`===> timerId = ${timerId} time: ${(new Date()).toLocaleTimeString('ru-Ru', options)}`, 'ads.duration = ', ads.duration * 1000, `timerId= ${timerId}`);
          dispatch(updateUrlSaga());
          clearTimeout(timerId)
        }, ads.duration  * 1000)
      }
      return function cleanup() {
        clearTimeout(timerId);
      };
    }
  , [ads])
// eslint-disable-next-line 
  useEffect(() => {
    dispatch(updateUrlSaga());
  }, []);
  const adsstyle = {
    position: 'relative',
    left: '25%',
    height: '12vw',
    width: '35vw',
    marginTop: '1vw',
}

  return (
    <> 
      <div style={({height:'86vh', width:'100%', backgroundImage: 'url(/img/taxi.png)', backgroundSize: '100% auto', backgroundRepeat: 'no-repeat'})}>
        <div>
          <img style={adsstyle} src={ads.url} alt="Здесь могла бы быть ваша реклама..."></img>
        </div>
      </div>
    </>
  );
}
export default memo(ImgWrapper);
