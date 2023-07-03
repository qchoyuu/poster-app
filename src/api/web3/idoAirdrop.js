import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const idoAirdorpFn = function (abi = abis.idoAirdorpAbi, address = config.idoAirdropAddress) {
    return new window.web3.eth.Contract(
        abi,
        address,
        { from: counterStore.userAddress }
    )
}

export const idoReviewOf = async () => {
    return idoAirdorpFn().methods.reviewOf(counterStore.userAddress).call()
}

export const idoclaim = async () => {
    return idoAirdorpFn().methods.claim().send()
}
