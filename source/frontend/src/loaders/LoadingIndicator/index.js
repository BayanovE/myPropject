import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function LoadingIndicator() {
    const classes = useStyles();
  
    return (
        <Backdrop 
            open={true}
            className={classes.backdrop}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

  export default LoadingIndicator;

  //ERROR: Это не работает)
