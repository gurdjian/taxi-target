/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateUrlSaga} from '../../redux/actions/sagaActions'

function ImgWrapper() {
  const ads = useSelector( state => state.ads);
  const dispatch = useDispatch();
  console.log(`===> render ${Date.now()}. ads = ${JSON.stringify(ads)} ads.duration = ${ads.duration}`);   

  useEffect(() => {
      console.log(`===> useEffect2 ${new Date()}`, 'ads.duration = ', ads.duration * 1000);
      if (ads.duration > 0) {
        const timerId = setTimeout( () => {
          console.log(`===> timer1 ${Date.now()}`, 'ads.duration = ', ads.duration * 1000, `timerId= ${timerId}`);
          dispatch(updateUrlSaga());
          clearTimeout(timerId)
        }, ads.duration  * 1000)
      }
    }
  , [ads])
// eslint-disable-next-line 
  useEffect(() => {
    dispatch(updateUrlSaga());
  }, []);


  return (
    <>
      <img style={({height:'86vh', width:'100%'})} src={ads.url} alt="Здесь могла бы быть ваша реклама..."></img>
    </>
  );
}
export default memo(ImgWrapper);
