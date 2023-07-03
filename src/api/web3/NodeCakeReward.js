import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const getNodeCakeRace = function (abi = abis.NodeCakeRewardAbi, address = config.NodeCakeRewardAddress) {
    return new window.web3.eth.Contract(
        abi,
        address,
        { from: counterStore.userAddress }
    )
}



export const getNodeCakeReviewOf = async (type) => {
    return getNodeCakeRace().methods.reviewOf(counterStore.userAddress,type).call()
}

export const nodeCakeClaim = async (type) => {
    return getNodeCakeRace().methods.claim(type).send()
}