// Ethereum related interfaces
import { hex2int, isMobile, networkList } from '../../utils/fun'
import detectEthereumProvider from '@metamask/detect-provider'
import { toHex } from '../utils/index'
// import { Dialog } from 'vant'

/**
 * Check whether the browser supports Ethereum
 * @return {Boolean} result
 */
export const checkEthereum = () => {
  return !!window.ethereum
}

// The Metamask wallet on Android has an error
export const checkMetamask = async () => {
  const provider = await detectEthereumProvider()
  if (provider) {
    console.log('Ethereum successfully detected!')
    // From now on, this should always be true:
    // provider === window.ethereum

    // Legacy providers may only have ethereum.sendAsync
    const chainId = await provider.request({
      method: 'eth_chainId',
    })
    return Promise.resolve(chainId)
  } else {
    // if the provider is not detected, detectEthereumProvider resolves to null
    const err = 'Please install MetaMask'
    return Promise.reject(err)
  }
}

/**
 * Requesting user Authorization
 * When connected, returns the user Accounts array
 * If no user is connected, the user authorization dialog box is displayed, and the user returns after authorization
 * @return {Promise} Promise
 */
export const requestAccounts = () => {
  return window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
    return accounts[0]
  }).catch(error => {
    let code = -1
    let message = ''
    if (error.code === 4001) {
      code = 4001
      message = 'Permissions needed to continue.'
    } else {
      if (error.code) {
        code = error.code
        message = error.message
      } else {
        message = error
      }
    }
    const err = { code, message }
    return Promise.reject(err)
  })
}

/**
 * Obtaining a User Account
 * Returns an empty array if there is no connection
 * @return {Promise} Promise
 */
export const getUserAddress = () => {
  return window.ethereum.request({ method: 'eth_accounts' }).then(accounts => {
    return accounts[0] || ''
  }).catch(error => {
    let code = -1
    let message = ''
    if (error.code) {
      code = error.code
      message = error.message
    } else {
      message = error
    }
    const err = { code, message }
    return Promise.reject(err)
  })
}

export const changeEthereumChain = (chainId) => {
  if (isMobile()) {
    return changeEthereumChainForMobile(chainId)
  }
  return changeEthereumChainForPc(chainId)
}
/**
 * Add and switch chains on mobile terminal
 * @return {Promise} Promise
 */
export const changeEthereumChainForMobile = (chainId) => {
  const timer = setTimeout(() => {
    // Dialog.alert({ message: 'Please refresh the page' })
  }, 10000)
  return addEthereumChain(chainId).then(res => {
    clearTimeout(timer)
    window.location.reload()
  }).catch(error => {
    clearTimeout(timer)
    if (error.code === -32602) {
      return switchEthereumChain(chainId).then(res => {
        window.location.reload()
      }).catch(error => {
        return Promise.reject(error)
      })
    } else {
      return Promise.reject(error)
    }
  })
}

/**
 * Add and switch chains on PC
 * @return {Promise} Promise
 */
export const changeEthereumChainForPc = (chainId) => {
  return switchEthereumChain(chainId).then(res => {
    window.location.reload()
  }).catch(error => {
    console.log(error.code)
    if (error.code === 4092) {
      return addEthereumChain(chainId).then(res => {
        window.location.reload()
      }).catch(error => {
        return Promise.reject(error)
      })
    } else {
      return Promise.reject(error)
    }
  })
}

/**
 * Add a chain
 * A dialog box is displayed asking you to add or switch links
 * @return {Promise} Promise
 */
export const addEthereumChain = (chainId) => {
  const obj = networkList.find(x => x.chainId === chainId)
  const params = {
    chainId: '0x' + obj.chainId.toString(16),
    chainName: obj.chainName,
    rpcUrls: [obj.rpcUrl],
    blockExplorerUrls: [obj.blockUrl],
    nativeCurrency: {
      name: obj.nativeName,
      symbol: obj.symbol,
      decimals: obj.decimals,
    },
  }
  return window.ethereum.request({ method: 'wallet_addEthereumChain', params: [params] }).then(result => {
    return result
  }).catch(error => {
    let message = ''
    let code = 0
    if (error.code === 4001) {
      message = 'Permissions needed to continue.'
      code = 4001
    } else if (error.code === -32602) {
      message = 'May not specify default MetaMask chain.'
      code = -32602
    } else {
      if (error.message) {
        message = error.message
        code = error.code
      } else {
        message = error
      }
    }
    const res = {
      code, message,
    }
    return Promise.reject(res)
  })
}

/**
 * Switch the chain
 * A dialog box is displayed asking you to add or switch links
 * @return {Promise} Promise
 */
export const switchEthereumChain = (chainId) => {
  return window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: toHex(chainId) }] }).then(result => {
    return result
  }).catch(error => {
    let message = ''
    let code = 0
    if (error.code === 4001) {
      message = 'Permissions needed to continue.'
      code = 4001
    } else if (error.code === 4902) {
      message = 'Unrecognized chain.'
      code = 4902
    } else {
      if (error.code) {
        code = error.code
        message = error.message
      } else {
        message = error
      }
    }
    const res = {
      code, message,
    }
    return Promise.reject(res)
  })
}

/**
 * Gets the chain selected by the current browser
 * The interface returns a hexadecimal result
 * Need to process to base 10
 * @return {Promise}
 */
export const getWindowNetwork = () => {
  return window.ethereum.request({ method: 'eth_chainId' }).then(res => {
    res = hex2int(res)
    return res
  }).catch(err => {
    return Promise.reject(err)
  })
}
