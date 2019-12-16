import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';

import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { SnackbarProvider } from 'notistack';
import Chip from '@material-ui/core/Chip';
import GithubIcon from 'mdi-material-ui/GithubCircle';

import {useEtherProvider} from 'use-ether-provider';

const useStyles = makeStyles(theme => ({
  container: {
    // margin: '0 50px'
  },
  contWrapper: {
    minHeight: '500px'
  },
  dialogWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px'
  },
  dialog: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px 0 20px 0'
  },
  by: {
    fontSize: '0.7em'
  },
  icons: {
    display: 'flex'
  },
  chip: {
    margin: '10px'
  },
  donate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px 20px 20px'
  },
  donateTitle: {
    display: 'flex',
    padding: '20px 10px',
    alignItems: 'center'
  },
  titleMsg: {
    color: 'rgba(90, 90, 90, 0.8)'
  },
  donateIcon: {
    marginRight: '2px',
    color: '#f50057'
  },
  addressWrapper: {
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  address: {
    fontSize: '0.5em',
    color: 'rgba(90, 90, 90, 0.4)',
    padding: '2px',
    '&:hover': {
      backgroundColor: 'rgba(200, 200, 200, 0.2)',
      cursor: 'pointer'
    }
  },
  notify: {
    color: '#f50057',
    fontSize: '0.5em'
  }
}));

let Root = ({children, setError}) => {
  const classes = useStyles();
  const provider = useEtherProvider();

  if (!provider) {
    return (
      <div className={classes.dialogWrapper}>
        <Paper className={classes.dialog}>
          <Typography variant={'h6'}>Support [Rinkeby testnet] only</Typography>
          <Typography>Waiting for Ethereum wallet...</Typography>
          <CircularProgress />
        </Paper>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <div className={classes.contWrapper}>
        {children}
      </div>
      <div className={classes.footer}>
        <div className={classes.icons}>
          <Chip
            icon={<GithubIcon />}
            label={'Star'}
            className={classes.chip}
            component='a'
            href={`https://github.com/BigMurry/erc20-faucet`}
            target={'_blank'}
            clickable
            color='secondary'
            variant='outlined'
          />
        </div>
        <Typography className={classes.by}>{`bybit exchange`}</Typography>
      </div>
    </div>
  );
};

let RootWrapper = (props) => {
  return (
    <SnackbarProvider maxSnack={4}>
      <Root {...props} />
    </SnackbarProvider>
  );
};

export default RootWrapper;
