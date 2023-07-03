import abis from 'src/abi/index'
import { counterStore } from 'src/store/Counter'
import config from 'src/api/utils/config'

const contract = function (abi = abis.vecatAbi, address = config.vecatControllerAddress) {
  return new window.web3.eth.Contract(
    abi,
    address,
    { from: counterStore.userAddress },
  )
}

export const catApprove = () => {
  return contract(abis.tokenAbi, config.CatToken).methods.approve(config.vecatControllerAddress, counterStore.approveMaxNum).send()
}

export const catAllowance = () => {
  return contract(abis.tokenAbi, config.CatToken).methods.allowance(counterStore.userAddress, config.vecatControllerAddress).call()
}

export const catBalance = () => {
  return contract(abis.tokenAbi, config.CatToken).methods.balanceOf(counterStore.userAddress).call()
}

export const tokenOfOwnerByIndex = () => {
  return contract().methods.tokenOfOwnerByIndex(counterStore.userAddress,0).call()
}

export const balanceOfNFT = (tokenId) => {
  return contract().methods.balanceOfNFT(tokenId).call()
}

export const getAvailableDepositNum = () => {
  return contract().methods.getAvailableDepositNum(counterStore.userAddress).call()
}

export const create_lock = (num,time) => {
  return contract().methods.create_lock(num,time).send()
}

export const locked = (tokenId) => {
  return contract().methods.locked(tokenId).call()
}

export const withdraw = (tokenId) => {
  return contract().methods.withdraw(tokenId).send()
}

export const increase_amount = (tokenId,num) => {
  return contract().methods.increase_amount(tokenId,num).send()
}

export const increase_unlock_time = (tokenId,time) => {
  return contract().methods.increase_unlock_time(tokenId,time).send()
}

export const totalSupply = () => {
   return contract().methods.totalSupply().call()
 }
