import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';
import {etherToWei} from 'src/api/utils/index';

const getNftDate = function (abi = abis.NFTFireCatAbi, address = config.NFTFireCatAddress) {
    return new window.web3.eth.Contract(
       abi,
       address,
       { from: counterStore.userAddress },
    )
  }

export const tokenURI = (address) => {
    return getNftDate().methods.tokenURI(address).call()
}

export const tokenIdOf = (address) => {
    return getNftDate().methods.tokenIdOf(address).call()
}

export const investmentNft = function (abi = abis.ProxyFireCatAbi, address = config.proxyFireCatAddress) {
    return new window.web3.eth.Contract(
        abi,
        address,
        { from: counterStore.userAddress,
        },
    )
}

export const invest = async () => {
    return investmentNft().methods.invest().send({value: etherToWei("1")})
}

export const mintAllowed = async (address) => {
    return investmentNft().methods.mintAllowed(address).call()
}  


export const upgradeToken = async (id) => {
    return investmentNft().methods.upgradeToken(id).send()
}  


