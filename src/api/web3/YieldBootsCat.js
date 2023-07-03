import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const getYielbootsApprove = function (abi = abis.yielbootsCatAbi, address = config.CatToken) {
    return new window.web3.eth.Contract(
        abi,
        address,
        { from: counterStore.userAddress }
    )
}

export const getBootsApprove = () => {
    console.log()
    return getYielbootsApprove().methods.approve(config.FireCatYieldBoots,(Math.pow(2, 256) - 1).toString(16)).send()
}

export const getBootsAllowance = () => {
    return getYielbootsApprove().methods.allowance(counterStore.userAddress,config.FireCatYieldBoots).call()
}

export const getBalanceOf = () => {
    return getYielbootsApprove().methods.balanceOf(counterStore.userAddress).call()
}
