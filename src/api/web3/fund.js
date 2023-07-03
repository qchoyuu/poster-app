import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const contract = function (abi = abis.fundAbi, address = config.fundAddress) {
  return new window.web3.eth.Contract(
      abi,
      address,
      { from: counterStore.userAddress },
  )
}

const contractUsdt = function (abi = abis.tokenAbi, address = config.usdtToken) {
  return new window.web3.eth.Contract(
      abi,
      address,
      { from: counterStore.userAddress },
  )
}

export const usdtApprove = () => {
  return contractUsdt().methods.approve(config.fundAddress,counterStore.approveMaxNum).send()
}

export const usdtAllowance = () => {
  return contractUsdt().methods.allowance(counterStore.userAddress,config.fundAddress).call()
}

export const usdtBalance = () => {
  return contractUsdt().methods.balanceOf(counterStore.userAddress).call()
}

export const getProducePlan = (totalShare) => {
  return contract().methods.getProducePlan(totalShare).call()
}

export const sharePrice = () => {
  return contract().methods.sharePrice().call()
}

export const totalShares = () => {
  return contract().methods.totalShares().call()
}

export const sharesOf = () => {
  return contract().methods.sharesOf(counterStore.userAddress).call()
}

export const userMaxShares = () => {
  return contract().methods.userMaxShares().call()
}

export const reviewOf = () => {
  return contract().methods.reviewOf(counterStore.userAddress).call()
}

export const isStakable = () => {
  return contract().methods.isStakable(counterStore.userAddress).call()
}

export const userCycleMap = () => {
  return contract().methods.userCycleMap(counterStore.userAddress).call()
}

export const claim = () => {
  return contract().methods.claim().send()
}

export const buyFund = (num) => {
  return contract().methods.buyFund(num).send()
}