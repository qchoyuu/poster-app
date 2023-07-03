
import { toolNumber, formatDecimal, formatDecimalNew } from '../../utils/fun'

/** ********************** common func ************************/
/**
 * Convert a hexadecimal number to a decimal number
 * This does not work for large numbers, but uses utils.tobn instead.
 * @param {String|Number} hex A hexadecimal number
 * @return {Number} The generated decimal number
 */
export const hexToNumber = hex => window.web3.utils.hexToNumber(hex)

/**
 * Numbers are converted to large numbers
 * @param {String|Number|HEX} number Numbers are converted to large numbers. Arguments cannot be decimals
 * @return {String} The generated BigNumber decimal string
 */
export const toBigNumber = number => window.web3.utils.toBN(number).toString()

/**
 * BigNumber arithmetic operations add, subtraction sub, multiplication mul, division div
 * @param {String|Number|HEX} num1
 * @param {String|Number|HEX} num2
 * @return {String} BigNumber string
 */
export const bigNumberAdd = (num1, num2) => {
  return window.web3.utils.toBN(num1).add(window.web3.utils.toBN(num2)).toString()
}
export const bigNumberSub = (num1, num2) => {
  return window.web3.utils.toBN(num1).sub(window.web3.utils.toBN(num2)).toString()
}
export const bigNumberMul = (num1, num2) => {
  return window.web3.utils.toBN(num1).mul(window.web3.utils.toBN(num2)).toString()
}
export const bigNumberDiv = (num1, num2) => {
  return window.web3.utils.toBN(num1).div(window.web3.utils.toBN(num2)).toString()
}

export const priceChange = (n, p, isShow) => {
  if (Number(n) === 0 || Number(p) === 0) {
    return 0
  } else {
    if (p.toString().split('.')[1] && p.toString().split('.')[1].length === 1) {
      p = p.toString() + '0'
    } else if (p.toString().split('.')[1] && p.toString().split('.')[1].length === 2) {
      p = p.toString()
    } else {
      p = p.toString() + '.00'
    }
    p = p.replace('.', '')
    if (isShow) {
      return formatDecimalNew(utilsToNumberAll(bigNumberDiv(bigNumberMul(n, Number(p)), 100)), 2)
    } else {
      return formatDecimal(utilsToNumberAll(bigNumberDiv(bigNumberMul(n, Number(p)), 100)), 2)
    }
  }
}

/**
 * Converts any given value to hexadecimal. Numeric strings are interpreted as numbers. Text strings will be interpreted as UTF-8 strings.
 * @param {String|Number|BN|BigNumber} mixed
 * @return {String} Generated hexadecimal string
 */
export const toHex = mixed => window.web3.utils.toHex(mixed)

/**
 * ethertoWei
 * @param {String|BN} ether A numeric string or BN string, cannot be a number
 * @return {String|BN}
 */
export const etherToWei = ether => window.web3.utils.toWei(ether, 'ether')

/**
 * weitoether
 * @param {String|BN} wei A numeric string or BN string, cannot be a number
 * @return {String|BN}
 */
export const weiToEther = wei => wei === 0 ? 0 : formatDecimal(window.web3.utils.fromWei(wei.toString(), 'ether'), 4)

/**
 * Checks if the given string is a valid Ethereum address
 * @param {String} address Address string
 * @return {Boolean} result
 */
export const isAddress = address => window.web3.utils.isAddress(address)

/**
 * Gets the ID of the current connected network
 * It turns out to be decimal
 * @return {Promise} Promise
 */
export const getNetworkId = () => {
  return window.web3.eth.net.getId().then(res => {
    return res
  }).catch(err => {
    return Promise.reject(err)
  })
}

/**
 * Get the current user Balance
 * @return {Promise} Promise
 */
export const getUserBalance = (userAddress) => {
  return window.web3.eth.getBalance(userAddress).then(res => {
    return res
  }).catch(err => {
    return Promise.reject(err)
  })
}

/**
 * get current block number
 * @return {Promise} Promise
 */
export const getBlockNumber = () => {
  return window.web3.eth.getBlockNumber().then(res => {
    return res
  }).catch(err => {
    return Promise.reject(err)
  })
}

/**
 * TODO:
 * get block matching the block number or block hash.
 * @return {Promise} Promise
 */
export const getBlock = (startTime) => {
  return window.web3.eth.getBlock(startTime).then(res => {
    return res
  }).catch(err => {
    return Promise.reject(err)
  })
}

/**
 * Automatically converts any given value to hexadecimal
 * @return {String} Conversion results
 */
export const utilsToHex = (mixed) => {
  return window.web3.utils.toHex(mixed)
}

/**
 * Automatically converts the value returned by the contract into dimensions and preserves n decimal places (18)
 * @return {String} Conversion results
 */
export const utilsToNumber = (num) => {
  return Number(formatDecimal(window.web3.utils.fromWei(toolNumber(num), 'ether'), 4))
}

/**
 * Automatically converts the value returned by the contract into dimensions and preserves n decimal places (18)
 * @return {String} Conversion results
 */
export const utilsToNumberAll = (num) => {
  num = toolNumber(num).toString()
  if (num > 0) {
    return toolNumber(window.web3.utils.fromWei(num.toString(), 'ether'))
  } else {
    return 0
  }
}

/**
 * Automatically converts the value returned by the contract into dimensions and preserves n decimal places (USDT-5)
 * @return {String} Conversion results
 */
export const utilsUsdtNumber = (num) => {
  return formatDecimal(toolNumber(num / 1000000), 4)
}

/**
 * Convert to dimension and hexadecimal when transferring value to contract
 */
export const utilsToContractNum = (num) => {
  return utilsToHex(window.web3.utils.toWei(num.toString(), 'ether'))
}

/**
 * Automatically converts the value returned by the contract into dimensions and preserves n decimal places (18)
 * @return {String} Conversion results
 */
export const utilsToNumberFloatNew = (num,floatNum) => {
  return Number(formatDecimalNew(window.web3.utils.fromWei(toolNumber(num), 'ether'), floatNum))
}