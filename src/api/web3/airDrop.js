import abis from 'src/abi/index';
import config from 'src/api/utils/config';
import { counterStore } from 'src/store/Counter';

const contract = function (abi = abis.StakeAirdropFactory, address = config.ETHStakeAirdropFactory) {
    return new window.web3.eth.Contract(
       abi,
       address,
       { from: counterStore.userAddress },
    )
  }

export const totalCycle = (type) => {
    if(type==0){
      return contract(abis.StakeAirdropFactory,config.BSCStakeAirdropFactory).methods.totalCycle().call()
    }else{
      return contract().methods.totalCycle().call()
    }
}  

export const addressOf = (id,type) => {
  if(type==0){
    return contract(abis.StakeAirdropFactory,config.BSCStakeAirdropFactory).methods.addressOf(id).call()
  }else{
    return contract().methods.addressOf(id).call()
  }
} 

export const addressOfBscEth = (id,type) => {
  if(type==0){
    return contract(abis.StakeAirdropFactory,config.BSCETHStakeAirdropFactory).methods.addressOf(id).call()
  }else{
    return contract(abis.StakeAirdropFactory,config.ETHStakeAirdropFactory).methods.addressOf(id).call()
  }
}

export const cycle = (ad) => {
  return contract(abis.StakeAirdrop,ad).methods.cycle().call()
} 

export const releaseTimePeriod = (ad) => {
  return contract(abis.StakeAirdrop,ad).methods.releaseTimePeriod().call()
} 

export const stakedOf = (ad) => {
  return contract(abis.StakeAirdrop,ad).methods.stakedOf(counterStore.userAddress).call()
} 

export const totalStaked = (ad) => {
  return contract(abis.StakeAirdrop,ad).methods.totalStaked().call()
} 

export const reviewOf = (ad) => {
  return contract(abis.StakeAirdrop,ad).methods.reviewOf(counterStore.userAddress).call()
} 

export const bscStake = (ad,num) => {
  return contract(abis.StakeAirdrop,ad).methods.stake(num).send()
} 

export const bscClaim = (ad) => {
  return contract(abis.StakeAirdrop,ad).methods.claim().send()
} 







// ffi balance
export const ffiBalance = (type) => {
  return contract(abis.tokenAbi, type==0?config.bscFFIToken:config.ethFFIToken).methods.balanceOf(counterStore.userAddress).call()
}


// bsc allowance Query the user
export const bscAllowance = (type,ad) => {
  return contract(abis.tokenAbi, type==0?config.bscFFIToken:config.ethFFIToken).methods.allowance(counterStore.userAddress, ad).call()
}

// bsc approve Authorized users
export const bscApprove = (type,ad) => {
  return contract(abis.tokenAbi, type==0?config.bscFFIToken:config.ethFFIToken).methods.approve(ad, (Math.pow(2, 256) - 1).toString(16)).send()
}



