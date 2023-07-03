import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const treasuryMirror = function (abi = abis.FireCatTreasuryMirrorApi, address = config.FireCatTreasuryMirrorAddress) {
    return new window.web3.eth.Contract(
       abi,
       address,
       { from: counterStore.userAddress },
    )
  }


export const treasuryOf = (id) => {
    return treasuryMirror().methods.treasuryOf(id).call()
}
