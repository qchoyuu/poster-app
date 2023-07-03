import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const getRecommendRelease = function (abi = abis.viewRewardReleaseCatAbi, address = config.ViewRewardReleaseCatAddress) {
    return new window.web3.eth.Contract(
       abi,
       address,
       { from: counterStore.userAddress },
    )
  }

export const getCatRewardReleaseOf = () => {
    return getRecommendRelease().methods.reviewOf(counterStore.userAddress).call()
}


export const claimCatRewardRelease = () => {
    return getRecommendRelease().methods.claim().send()
}

export const userCycleMap = () => {
   return getRecommendRelease().methods.userCycleMap(counterStore.userAddress).call()
}

