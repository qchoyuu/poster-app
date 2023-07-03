import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';
// import {etherToWei,toHex} from '../utils/index';

const contractNftStake = function (abi = abis.nftStakeAbi, address = config.nftStake) {
  return new window.web3.eth.Contract(
      abi,
      address,
      { from: counterStore.userAddress },
  )
}
/**
 * 
 * @param {String} abi 
 * @param {String} address 
 * @returns 
 */
const contractCatStake = function (abi = abis.catStakeAbi, address = config.catStake) {
  return new window.web3.eth.Contract(
      abi,
      address,
      { from: counterStore.userAddress },
  )
}

const contractCatToken = function (abi = abis.tokenAbi, address = config.CatToken) {
  return new window.web3.eth.Contract(
      abi,
      address,
      { from: counterStore.userAddress },
  )
}

export const catBalance = () => {
  return contractCatToken().methods.balanceOf(counterStore.userAddress).call()
}

export const nftAllowance = (id) => {
  return contractNftStake(abis.NFTFireCatAbi, config.NFTFireCatAddress).methods.getApproved(id).call()
}

export const nftApprove = (id) => {
  return contractNftStake(abis.NFTFireCatAbi, config.NFTFireCatAddress).methods.approve(config.nftStake, id).send()
}

export const catApprove = (id) => {
  return contractCatStake(abis.tokenAbi, config.CatToken).methods.approve(config.catStake, (Math.pow(2, 256) - 1).toString(16)).send()//
}

export const catAllowance = () => {
  return contractCatStake(abis.tokenAbi, config.CatToken).methods.allowance(counterStore.userAddress, config.catStake).call()
}

export const destructionApprove = (addres,id) => {
  return contractNftStake(abis.NFTFireCatAbi, config.NFTFireCatAddress).methods.approve(addres , id).send()
}

export const claimInviteReward = () => {
  return contractCatStake().methods.claimInviteReward().send()
}

export const inviteRewardOf = () => {
  return contractCatStake().methods.inviteRewardOf(counterStore.userAddress).call()
}

export const totalStaked = () => {
  return contractCatStake().methods.totalStaked().call()
}

export const totalEarned = () => {
  return contractCatStake().methods.totalEarned().call()
}

export const reviewOf = () => {
  return contractCatStake().methods.reviewOf(counterStore.userAddress).call()
}

export const catStateOf = () => {
  return contractCatStake().methods.stateOf(counterStore.userAddress).call()
}

export const catReviewOf = () => {
  return contractCatStake().methods.reviewOf(counterStore.userAddress).call()
}

export const catRewardRate = () => {
  return contractCatStake().methods.rewardRate().call()
}

export const catUserCycleOf = () => {
  return contractCatStake().methods.userCycleOf(counterStore.userAddress).call()
}

export const catStake = (num) => {
  return contractCatStake().methods.stake(num).send()
}

export const catClaim = () => {
  return contractCatStake().methods.claim().send()
}

export const nftStateOf = () => {
  return contractNftStake().methods.stateOf(counterStore.userAddress).call()
}

export const nftStakedOf = () => {
  return contractNftStake().methods.stakedOf(counterStore.userAddress).call()
}

export const nftStakeMaxNumOf = () => {
  return contractNftStake().methods.stakeMaxNumOf(counterStore.userAddress).call()
}

export const nftStake = (id) => {
  return contractNftStake().methods.stake(id).send()
}

export const nftClaim = (id) => {
  return contractNftStake().methods.claim().send()
}

export const isStaked = () => {
  return contractNftStake().methods.isStaked(counterStore.userAddress).call()
}
