import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const getRecommend = function (abi = abis.ViewRewardCatAbi, address = config.ViewRewardCatAddress) {
    return new window.web3.eth.Contract(
       abi,
       address,
       { from: counterStore.userAddress },
    )
  }

export const getCatRewardOf = () => {
    return getRecommend().methods.rewardOf(counterStore.userAddress).call()
}


export const claimCatReward = () => {
    return getRecommend().methods.claim().send()
}

