/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
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
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: 'flex',
    backgroundColor: 'gold',
  },
  marginAutoItem: {
    margin: 'auto'
  },
  alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  elbrusfamily: {
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
    font: '#4520ab',

  }
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
          <Grid item xs={3}>
            <Grid container spacing={1}>
              <Grid item center xs>
              <Box
                display="flex" 
                bgcolor="white"
              >
                <Box m="auto">
               <h1 className={classes.elbrusfamily}>Elbrus Navigator</h1>
                </Box>
              </Box>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs>
                <MapWrapper > </MapWrapper> 
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
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
