import abis from 'src/abi/index'
import { counterStore } from 'src/store/Counter'
import config from 'src/api/utils/config'

const contract = function (abi = abis.veRewardAbi, address = config.VeRewardControllerAddress) {
  return new window.web3.eth.Contract(
    abi,
    address,
    { from: counterStore.userAddress },
  )
}

export const getCurrentLongEpochId = () => {
  return contract().methods.getCurrentLongEpochId().call()
}

export const getLongEpochIdByTime = (time) => {
  return contract().methods.getLongEpochIdByTime(time).call()
}

export const getCurrentEpochId = () => {
  return contract().methods.getCurrentEpochId().call()
}

export const getLongEpochInfo = (data) => {
  return contract().methods.getLongEpochInfo(data).call()
}

export const getPendingRewardSingle = (tokenId,epochId) => {
  return contract().methods.getPendingRewardSingle(tokenId,epochId).call()
}

export const pendingReward = (tokenId,num,startEpochendEpoch) => {
  return contract().methods.pendingReward(tokenId,num,startEpochendEpoch).call()
}

export const getEpochInfo = (epochId) => {
  return contract().methods.getEpochInfo(epochId).call()
}

export const claimReward = (tokenId,startEpoch,endEpoch) => {
  return contract().methods.claimReward(tokenId,startEpoch,endEpoch).send()
}



