
class CounterStore {
  provider: any = ''
  userAddress: any = null
  chainId: any = null
  loading = false 

  //set loading status
  setLoading = (status: any) => {
    this.loading = status
  }
  //set chainId
  setChainId = (id: any) => {
    this.chainId = id
  }
  connectWallet = async () => {
  }
}
const counterStore = new CounterStore()
export { counterStore }
