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

export const getCurrentChinId = () =>{
    return window.ethereum.request({ method: 'eth_chainId' }).then(res => {
    return parseInt(res.toString().slice(2), 16)
  })
}