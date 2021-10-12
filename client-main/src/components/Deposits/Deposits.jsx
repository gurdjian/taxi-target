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
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute:'numeric' };

  const classes = useStyles();
  return (
    <React.Fragment>
      <p>Баланс:</p>
      <Typography component="p" variant="h4">  	
        &#8381;{wallet}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {(new Date()).toLocaleString('ru-Ru',options)}
      </Typography>
    </React.Fragment>
  );
}
