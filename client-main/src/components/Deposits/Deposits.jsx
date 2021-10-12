import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from "react-redux"
import { getWalletAction } from "../../redux/actions/cabinetAction";
// import Title from './Title';


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const dispatch = useDispatch();
  const wallet = useSelector( state => state.wallet )
  useEffect(()=> {
    dispatch(getWalletAction())
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <p>Recent Deposits</p>
      <Typography component="p" variant="h4">  	
        &#8381;{wallet}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
    </React.Fragment>
  );
}
