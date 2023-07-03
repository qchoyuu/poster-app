import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const getRecommend = function (abi = abis.FireCatRecommendAbi, address = config.FireCatRecommendAddress) {
    return new window.web3.eth.Contract(
       abi,
       address,
       { from: counterStore.userAddress },
    )
  }

export const getRewardOf = () => {
    return getRecommend().methods.rewardOf(counterStore.userAddress).call()
}


export const claimReward = () => {
    return getRecommend().methods.claim().send()
}

