import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const upgrade = function (abi = abis.upgradeAbi, address = config.NFTFireCatAddress) {
    return new window.web3.eth.Contract(
       abi,
       address,
       { from: counterStore.userAddress },
    )
}
const upgradeGas = function (abi = abis.upgradeAbi, address = config.NFTFireCatAddress,gas) {
    return new window.web3.eth.Contract(
       abi,
       address,
       { from: counterStore.userAddress, gas: Number.parseInt(gas * 1.5) },
    )
}

export const upgradeToken = async (id) => {
    const gas = await upgrade().methods.upgradeToken(id).estimateGas({ from: counterStore.userAddress })
    return upgradeGas(abis.upgradeAbi,config.NFTFireCatAddress,gas).methods.upgradeToken(id).send()
}


export const getApprove = () => {
    return upgrade(abis.tokenAbi,config.CatToken).methods.approve(config.NFTFireCatAddress,(Math.pow(2, 256) - 1).toString(16)).send()
}

export const getAllowance = () => {
    return upgrade(abis.tokenAbi,config.CatToken).methods.allowance(counterStore.userAddress,config.NFTFireCatAddress).call()
}
