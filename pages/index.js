import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';

import BN from 'bignumber.js';
import {getContractInstance} from '../artifacts';
// import Router, {useRouter} from 'next/router';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import MineIcon from 'mdi-material-ui/Pickaxe';
import cn from 'classnames';

import Root from '../components/Root';
import {useEtherProvider, useAccount} from 'use-ether-provider';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: '#000000',
    padding: '20px',
    margin: '0 0 20px 0'
  },
  font: {
    color: '#ffffff'
  },
  cell: {
    backgroundColor: '#eeeeee',
    borderRadius: '5px',
    padding: '5px'
  },
  line: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  mainCont: {
    padding: '10px',
    margin: 'auto',
    maxWidth: '600px'
  },
  inputCont: {
    padding: '20px'
  },
  input: {
    // flex: 1,
    margin: '20px 0'
  },
  btnIcon: {
    margin: '0 0 0 10px'
  },
  upper: {
    margin: '50px 0 0 0'
  },
  tx: {
    margin: '0 0 10px 0'
  },
  smbtn: {
    height: '30px'
  }
}));

function short(str, len) {
  return `${str.substring(0, len)}...${str.substring(str.length - len)}`;
}

function validate(address, amount, currentAmount) {
  const stats = {
    eAddress: false,
    eAmount: false
  };
  if (!/^0x[0-9a-fA-F]{40}$/.test(address)) {
    stats.eAddress = true;
  }
  if (amount < 1 || (parseInt(amount, 10) + parseInt(currentAmount, 10)) > 1000) {
    stats.eAmount = true;
  }
  return stats;
}

let Index = ({
  dispatchGeneFetch,
  pinnedDragons = [],
  genes = {}
}) => {
  const classes = useStyles();
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState(1);
  const [txs, setTxs] = useState([]);
  const [addrErr, setAddrErr] = useState(false);
  const [amountErr, setAmountErr] = useState(false);

  const etherProvider = useEtherProvider();
  const myAddress = useAccount(etherProvider);

  const [usdtContract, setUsdtContract] = useState(null);
  const [myBalance, setMyBalance] = useState('0.0');

  useEffect(() => {
    if (etherProvider) {
      const contract = getContractInstance(etherProvider.getSigner(), 4);
      setUsdtContract(contract);
      if (myAddress) {
        // console.log(myAddress);
        contract.balanceOf(myAddress).then(balance => setMyBalance(
          new BN(balance.toString()).dividedBy(1e6).toString()
        ));
      }
    }
  }, [myAddress, etherProvider]);

  return (
    <Root>
      <div className={classes.header}>
        <Typography className={classes.font}>Bybit Testnet USDT Faucet</Typography>
      </div>
      <div className={classes.mainCont}>
        <Paper className={classes.inputCont}>
          <div className={classes.cell}>
            <Typography>{`My Balance: ${myBalance} TUSDT`}</Typography>
          </div>
          <div className={classes.line}>
            <TextField required id={'address'} label={'ETH address'} spellCheck={false}
              error={addrErr}
              helperText={addrErr ? 'eth address incorrect!' : ''}
              className={classes.input}
              fullWidth
              value={address}
              placeholder={'0x1234...'}
              onChange={e => setAddress(e.target.value)} />
            <Button className={classes.smbtn} variant={'contained'} size={'small'} onClick={e => setAddress(myAddress)}>Self</Button>
          </div>
          <TextField required id={'amount'} label={'Token Amount'} type={'number'}
            error={amountErr}
            helperText={amountErr ? 'can only mint up to 1 - 1000 TUSDT' : ''}
            className={classes.input}
            fullWidth
            value={amount}
            inputProps={{min: 1}}
            onChange={e => setAmount(e.target.value)} />

          <Button className={classes.iconButton}
            color={'primary'}
            aria-label={'Mint'}
            variant={'contained'}
            onClick={e => {
              const {eAddress, eAmount} = validate(address, amount, myBalance);
              setAddrErr(eAddress);
              setAmountErr(eAmount);
              // console.log(`${eAddress}, ${eAmount}`);
              if (!eAddress && !eAmount) {
                usdtContract.mint(address, new BN(amount).times(1e6).toString()).then(tx => {
                  if (tx.hash) {
                    setTxs([...txs, tx.hash]);
                  }
                });
              }
            }}>
            Mint Token
            <MineIcon className={classes.btnIcon} />
          </Button>
        </Paper>
        {txs && txs.length > 0 && (
          <Paper className={cn(classes.inputCont, classes.upper)}>
            {
              txs.map(tx => (
                <div key={tx} className={classes.tx}>
                  <a target={'_blank'} href={`https://rinkeby.etherscan.io/tx/${tx}`}>{short(tx, 8)}</a>
                </div>
              ))
            }
          </Paper>
        )}
      </div>
    </Root>
  );
};

export default Index;
