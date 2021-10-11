/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImgWrapper from '../ImgWrapper/ImgWrapper';
import MapWrapper from '../MapWrapper/MapWrapper';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { startRouting, stopRouting } from '../../redux/actions/sagaActions';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function Main() {
  const dispatch = useDispatch();
  const startHadler = (e) => {
   
    dispatch(startRouting());
    // const tId = setTimeout( () => {
    //   myMap.geoObjects.add( elem );
    // }, stepDuration * index )
  }
  const stopHadler = (e) => {
   
    dispatch(stopRouting());
    // const tId = setTimeout( () => {
    //   myMap.geoObjects.add( elem );
    // }, stepDuration * index )
  }
  // material classes
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} >
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Grid container spacing={1}>
              <Grid item xs>
                <Paper className={classes.paper}>{Date()}</Paper>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs>
                <MapWrapper > </MapWrapper> 
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <ImgWrapper />
          </Grid>
        </Grid>
      </div>
      <Button onClick={startHadler} variant="contained" color="primary">
        START
      </Button> {'\t'}
      <Button onClick={stopHadler} variant="contained" color="primary">
        STOP
      </Button>
    </>
  );
}

export default memo(Main);
