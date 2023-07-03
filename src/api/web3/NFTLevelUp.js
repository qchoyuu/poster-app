import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const nftLevelUp = function (abi = abis.FireCatNFTLevelUpAbi, address = config.FireCatNFTLevelUpAddress) {
    return new window.web3.eth.Contract(
       abi,
       address,
       { from: counterStore.userAddress },
    )
}

export const levelUpRequireStake = (id) => {
    return nftLevelUp().methods.levelUpRequireStake(id).call()
}

export const levelUpRequirePay = (id) => {
    return nftLevelUp().methods.levelUpRequirePay(id).call()
}


export const isStakeQualified = () => {
    return nftLevelUp().methods.isStakeQualified(7).call()
}

