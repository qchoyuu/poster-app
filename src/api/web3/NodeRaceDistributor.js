import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const getNodeRace = function (abi = abis.NodeRaceDistributorAbi, address = config.NodeRaceDistributorAddress) {
    return new window.web3.eth.Contract(
        abi,
        address,
        { from: counterStore.userAddress }
    )
}

export const getNodeRaceReviewOf = async (type) => {
    return getNodeRace().methods.reviewOf(counterStore.userAddress,type).call()
}

export const nodeCakeClaim = async (type) => {
    return getNodeRace().methods.claim(type).send()
}