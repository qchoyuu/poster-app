import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const getNodeSplit = function (abi = abis.NodeSplitDistributorAbi, address = config.NodeSplitDistributorAddress) {
    return new window.web3.eth.Contract(
        abi,
        address,
        { from: counterStore.userAddress }
    )
}

export const getNodeSplitReviewOf = async () => {
    return getNodeSplit().methods.reviewOf(counterStore.userAddress).call()
}

export const nodeSplitClaim = async () => {
    return getNodeSplit().methods.claim().send()
}

export const userCycleMap = () => {
   return getNodeSplit().methods.userCycleMap(counterStore.userAddress).call()
}