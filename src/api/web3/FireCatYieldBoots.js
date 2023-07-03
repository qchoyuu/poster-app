import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const getYielboots = function (abi = abis.fireCatYielbootsAbi, address = config.FireCatYieldBoots) {
    return new window.web3.eth.Contract(
        abi,
        address,
        { from: counterStore.userAddress }
    )
}

export const getTotalStaked = () => {
    return getYielboots().methods.totalStaked().call()
}

export const getStake = (num) => {
    return getYielboots().methods.stake(num).send()
}

export const getCycleTime = () => {
    return getYielboots().methods.cycleTime().call()
}

export const getUserCycleMap = () => {
    return getYielboots().methods.userCycleMap(counterStore.userAddress).call()
}

export const getStakedOf = () => {
    return getYielboots().methods.stakedOf(counterStore.userAddress).call()
}

export const getIsStakeable = (num) => {
    return getYielboots().methods.isStakeable(counterStore.userAddress,num).call()
}

export const getBootsReviewOf = () => {
    return getYielboots().methods.reviewOf(counterStore.userAddress).call()
}

export const getBootsClaim = () => {
    return getYielboots().methods.claim().send()
}






