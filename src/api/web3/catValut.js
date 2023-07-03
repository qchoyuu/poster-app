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

export const totalStaked = () => {
    return catVaultFn().methods.totalStaked().call()
}

export const userStaked = (id) => {
    return catVaultFn().methods.staked(id).call()
}

export const rewardOfCake = (id) => {
    return catVaultFn().methods.rewardOf(id).call()
}

export const totalEarnings = () => {
    return catVaultFn().methods.totalEarnings().call()
}

export const getCatBalance = () => {
    return catVaultFn(abis.tokenAbi,config.cakeToken).methods.balanceOf(counterStore.userAddress).call()
}

export const getAllowance = () => {
    return catVaultFn(abis.tokenAbi,config.cakeToken).methods.allowance(counterStore.userAddress,config.FireCatVaultAddress).call()
}

export const getApprove = () => {
    return catVaultFn(abis.tokenAbi,config.cakeToken).methods.approve(config.FireCatVaultAddress,(Math.pow(2, 256) - 1).toString(16)).send()
}

export const stake = (num) => {
    return catVaultFn().methods.stake(num).send()
}

export const claimCakeFn = (id) => {
    return catVaultFn().methods.claim(id).send()
}

export const getUserCatBalance = () => {
    return catVaultFn(abis.tokenAbi,config.CatToken).methods.balanceOf(counterStore.userAddress).call()
}


export const exitFeeFacotr = () => {
    return catVaultFn().methods.exitFeeFacotr().call()
}

export const reservesShareFactor = () => {
    return catVaultFn().methods.reservesShareFactor().call()
}

export const inviterShareFactor = () => {
    return catVaultFn().methods.inviterShareFactor().call()
}


