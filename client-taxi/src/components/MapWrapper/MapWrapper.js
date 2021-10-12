import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { YMaps, Map, Placemark, Polygon } from 'react-yandex-maps';
import { getPositionSaga } from '../../redux/actions/sagaActions';


const MapWrapper = () => {
  const position = useSelector(state => state.position);
  // const [mapCenter, setMapCenter] = useState([55.75, 37.57]);
  const ranges = useSelector( state => state.ranges );
  // const [mapZoom, setMapZoom] = useState(11);
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(getPositionSaga());
      // setMapCenter(position);
    }, 50)
    // setMapZoom(14);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position])
  const rangesPolygon = ranges.map( (elem, index) => {
 
      return <Polygon
        key={index + 1}
        geometry={[elem]}
        options={{
          fillColor: '#FF0000',
          strokeColor: '#0000FF',
          opacity: 0.3,
          strokeWidth: 1,
          strokeStyle: 'dash',
        }}
      />
  });
  return (
  <YMaps>
    {/* state={{ center: [55.75, 37.57], zoom: 10 }} */}
    <Map defaultState={{ center: [55.75, 37.62], zoom: 10 }} style={({width: '99%', height: '75vh'})}>
      <Placemark geometry={position} options={({preset: 'islands#yellowAutoCircleIcon'})}/>
      {rangesPolygon}
    </Map>
  </YMaps>
  )
};

export default MapWrapper;
