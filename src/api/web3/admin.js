import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const catVaultFn = function (abi = abis.catVaultAbi, address = config.FireCatVaultAddress) {
    return new window.web3.eth.Contract(
       abi,
       address,
       { from: counterStore.userAddress },
    )
  }

export const setReservesShareFactor = (ratio) => {
    return catVaultFn().methods.setReservesShareFactor(ratio).send()
}

export const setMiningPool = (ar1, ar2) => {
    return catVaultFn().methods.setMiningPool(ar1, ar2).send()
}

export const setPath = (ad1, ad2) => {
    return catVaultFn().methods.setPath(ad1, ad2).send()
}

export const setRewardRate = (time, num) => {
    return catVaultFn(abis.fireCatIssuePoolAbi, config.fireCatIssuePoolAddress).methods.setPath(time, num).send()
}

export const updatePool = () => {
    return catVaultFn().methods.updatePool().send()
}