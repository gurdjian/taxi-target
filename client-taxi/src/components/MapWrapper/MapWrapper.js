import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { getPositionSaga } from '../../redux/actions/sagaActions';


const MapWrapper = () => {
  console.log('asdfasdfasdfasdf')
  const position = useSelector(state => state.position);
  const [mapCenter, setMapCenter] = useState([55.75, 37.57]);
  const [mapZoom, setMapZoom] = useState(11);
  console.log(position);
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(getPositionSaga());
      // setMapCenter(position);
    }, 1000)
    // setMapZoom(14);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position])
  return (
  <YMaps>
    <Map state={{ center: mapCenter, zoom: mapZoom }} style={({width: '99%', height: '80vh'})}>
      <Placemark geometry={position} options={({preset: 'islands#yellowAutoCircleIcon'})}/>
    </Map>
  </YMaps>
  )
};

export default MapWrapper;
