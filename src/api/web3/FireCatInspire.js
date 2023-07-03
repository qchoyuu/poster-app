import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const getInspire = function (abi = abis.fireCatInspireAbi, address = config.FireCatInspire) {
    return new window.web3.eth.Contract(
        abi,
        address,
        { from: counterStore.userAddress }
    )
}

export const getYieldRewardOf = () => {
    return getInspire().methods.yieldRewardOf(counterStore.userAddress).call()
}

export const getLevelUpRewardOf = () => {
    return getInspire().methods.nftLevelUpRewardOf(counterStore.userAddress).call()
}

export const getClaim = () => {
    return getInspire().methods.claim().send()
}




