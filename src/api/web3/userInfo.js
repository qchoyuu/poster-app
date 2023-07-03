import abis from 'src/abi/index'
import { counterStore } from 'src/store/Counter'
import config from 'src/api/utils/config';

const contract = function (abi = abis.registerAbi, address = config.registerContractAddress) {
  return new window.web3.eth.Contract(
    abi,
    address,
    { from: counterStore.userAddress },
  )
}

export const getUsers = () => {
  return contract().methods.getUsers(counterStore.userAddress).call()
}

export const isRegistered = () => {
  return contract().methods.isRegistered(counterStore.userAddress).call()
}

export const register = (address) => {
  return contract().methods.userRegistration(address).send()
}
