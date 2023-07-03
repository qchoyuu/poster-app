import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const tlssuePool = function (abi = abis.fireCatIssuePoolAbi, address = config.fireCatIssuePoolAddress) {
    return new window.web3.eth.Contract(
       abi,
       address,
       { from: counterStore.userAddress },
    )
  }


export const totalEarningsCat = () => {
    return tlssuePool().methods.totalEarnings().call()
}

export const poolReviewOf = () => {
    return tlssuePool().methods.reviewOf(counterStore.userAddress).call()
}

export const earnedCat = (num) => {
    return tlssuePool().methods.earned(num).call()
}


export const harvest = (id) => {
    return tlssuePool().methods.harvest(id).send()
}

export const claimCat = () => {
    return tlssuePool().methods.claim().send()
}

export const userDataTime = () => {
    return tlssuePool().methods.userData(counterStore.userAddress).call()
}

export const rewardRatePool = () => {
    return tlssuePool().methods.rewardRate().call()
}

export const userAwardPool = () => {
    return tlssuePool().methods.userAward(counterStore.userAddress).call()
}
