/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const router = require('express').Router();
const fs = require('fs');
const geolib = require('geolib');
const { Range } = require('../db/models');

async function getCurrentPolygon(curCoord) {
  const polygons = await Range.findAll();
  const zoneGeoArr = [];
  const polygonsArr = polygons.filter((elem) => {
    const curCoordObj = { latitude: curCoord[0], longitude: curCoord[1] };
    const zone_geo = JSON.parse(elem.zone_geo);
    zoneGeoArr.push(zone_geo);
    const zoneGeo = zone_geo.map((zone) => ({ latitude: zone[0], longitude: zone[1] }));
    // console.log(`curCoordObj = ${JSON.stringify(curCoordObj)} , zoneGeo = ${JSON.stringify(zoneGeo)}`);
    const result = geolib.isPointInPolygon(curCoordObj, zoneGeo);
    return result;
  });
  return polygonsArr;
}
router.get('/', (req, res) => {
  const { ads } = JSON.parse(fs.readFileSync(`${process.env.PWD}/db/db.json`, 'utf-8'));
  const index = Math.round(Math.random() * 9);
  // const polygonsArr = getCurrentPolygon(req.app.locals.traektoria.getCurrentCoordinate());
  res.json(ads[index]);
});

router.get('/current', async (req, res) => {
  const polygonsArr = await getCurrentPolygon(req.app.locals.traektoria.getCurrentCoordinate());
  // eslint-disable-next-line no-undef
  res.json({
    ranges: polygonsArr.map((elem) => JSON.parse(elem.zone_geo)),
    position: req.app.locals.traektoria.getCurrentCoordinate(),
    status: req.app.locals.traektoria.inProcess ? 'route' : 'stop',
  });
});


router.get('/start', async (req, res) => {
  // eslint-disable-next-line no-undef
  req.app.locals.traektoria.startRoute();
  req.app.locals.traektoria.inProcess = true;
  const polygonsArr = await getCurrentPolygon(req.app.locals.traektoria.getCurrentCoordinate());
  res.json({
    position: req.app.locals.traektoria.getCurrentCoordinate(),
    status: 'start',
    duration: req.app.locals.traektoria.currentDuration,
    ranges: polygonsArr.map((elem) => JSON.parse(elem.zone_geo)),
  });
});

router.get('/stop', async (req, res) => {
  req.app.locals.traektoria.stopRoute();
  res.sendStatus(200);
});

module.exports = router;
