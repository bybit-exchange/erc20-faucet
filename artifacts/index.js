import * as ethers from 'ethers';
import _get from 'lodash/get';
import {abi, networks} from './abi';

function getContractInstance(providerOrSigner, network = 4) {
  const addr = _get(networks, [network]);
  if (!abi || !addr) {
    throw new Error('abi or address not found.');
  }
  return new ethers.Contract(addr, abi, providerOrSigner);
}

function getContractIface() {
  return new ethers.utils.Interface(abi);
}

function getAddr(network = 4) {
  return _get(networks, [network]);
}

module.exports = {
  getContractInstance,
  getContractIface,
  getAddr
};
