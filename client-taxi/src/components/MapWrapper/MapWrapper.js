import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { YMaps, Map, Placemark, Polygon } from 'react-yandex-maps';
import { setPositionAction } from '../../redux/actions/reduxActions';
import { getPositionSaga, getRange } from '../../redux/actions/sagaActions';


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
      
    }, 500)
    // setMapZoom(14);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  useEffect(() => {
    dispatch(getRange(position));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
  function mapHandler(ymaps) {
    console.log('ymaps = ', ymaps);
    // const myMap = ymaps[0].Map;
    // console.log('myMap = ', myMap);
    // myMap?.events?.add('click', function (e) {
    //   myMap.balloon.open(e.get('coords'), 'Щелк!');
    //   console.log(e.get('coords'));      
    // });
  }
  function clickHandler(e) {
    console.log(e.get('coords'));
    dispatch(setPositionAction(e.get('coords')));
    dispatch(getRange(e.get('coords')));
  }
  return (
    <>
      <YMaps>
        {/* state={{ center: [55.75, 37.57], zoom: 10 }} */}
        <Map onClick={clickHandler} onLoad={mapHandler} defaultState={{ center: [55.75, 37.62], zoom: 10 }} style={({width: '99%', height: '75vh'})}>
          <Placemark geometry={position} options={({preset: 'islands#yellowAutoCircleIcon'})}/>
          {rangesPolygon}
        </Map>
      </YMaps>
     <span style={({color: 'white'})}>{position.join(', ')}</span> 
  </>
  )
};

export default MapWrapper;
