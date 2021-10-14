/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const router = require('express').Router();
// const fs = require('fs');
const geolib = require('geolib');
const { Op } = require('sequelize');
const { Range, Advertisement, AdvertisementRange } = require('../db/models');

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
  // Логирование id зон
  // if (polygonsArr.length > 0) {
  //   fs.appendFileSync('./ranges.json', (`${polygonsArr.map((elem) => elem.id).join(',')}\n`));
  // }
  return polygonsArr;
}

router.get('/', async (req, res) => {
  // мок:
  // const { ads } = JSON.parse(fs.readFileSync(`${process.env.PWD}/db/db.json`, 'utf-8'));
  const polygonsArr = await getCurrentPolygon(req.app.locals.traektoria.getCurrentCoordinate());
  const polygon = polygonsArr.map((elem) => elem.id);
  const adsQuery = await Advertisement.findAll({
    include: {
      model: Range,
      where: {
        id: {
          [Op.in]: polygon,
        },
      },
    },
  });
  const ads = adsQuery.map((elem) => ({id: elem.id, url: elem.url, duration: elem.time }));
  const index = Math.round(Math.random() * (ads.length - 1));
  const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const time = (new Date()).toLocaleTimeString('ru-Ru', options);
  console.log('polygon = ', polygon, 'time = ', time, 'ads = ', ads);
  res.json(ads[index]);
});

router.post('/range', async (req, res) => {
  const { coord } = req.body;
  req.app.locals.traektoria.currentCoords = coord;
  const polygonsArr = await getCurrentPolygon(coord);
  const polygon = polygonsArr.map((elem) => JSON.parse(elem.zone_geo));
  console.log(polygon);
  res.json(polygon);
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
