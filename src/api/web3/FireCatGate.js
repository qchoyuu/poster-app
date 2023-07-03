import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const fireCatGate = function (abi = abis.FireCatGateAbi, address = config.FireCatGateAddress) {
    return new window.web3.eth.Contract(
       abi,
       address,
       { from: counterStore.userAddress },
    )
  }
const fireCatGateGas = function (abi = abis.FireCatGateAbi, address = config.FireCatGateAddress,gas) {
  return new window.web3.eth.Contract(
      abi,
      address,
      { from: counterStore.userAddress, gas: Number.parseInt(gas * 1.5) },
  )
}

export const destroy = async (id) => {
  const gas = await fireCatGate().methods.destroy(id).estimateGas({ from: counterStore.userAddress })
  return fireCatGateGas(abis.FireCatGateAbi,config.FireCatGateAddress,gas).methods.destroy(id).send()
}
