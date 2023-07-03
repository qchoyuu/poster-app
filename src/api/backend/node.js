import { id } from 'ethers/lib/utils'
import config from 'src/api/utils/config'
import { _get } from './indexStrong'
import { _post } from './indexStrong'
import { counterStore } from 'src/store/Counter'

const getUrl = (url) => {
  return config.nodeUrl + url
}

export const getUserInfor = (address) => _get(getUrl(`user/info?publicKey=${address}`))



export const getphashTime = () => _get(getUrl(`config/phash_time`))



export const getNodeList = () => _get(getUrl(`node-reward/new-score-rank-for-week`))


export const getCycleAdditionList = () => _get(getUrl(`node-reward/new-score-rank-for-week`))



export const getNodeSupList = () => _get(getUrl(`node_contest/list/super`))



export const getPrevious = (num,type) => _get(getUrl(`node_contest/snapshot?phase=${num}&nodeType=${type}`))


export const getPreviousList = (num) => _get(getUrl(`userScoreRecord/snapshot?phase=${num}`))

export const getPointsDetails = (current) => _post(getUrl(`scoreLog/getList`),{
   "bean":{
      "userPublicKey":counterStore.userAddress.toLowerCase(),
      "phase":`${current}`
   },
   "pageSize":"0",
   "page":"0",
   "ascColumns":[],
   "descColumns":["created_time"]
})

export const upgradeNodes = (id,nodeType) => _post(getUrl(`user/node?id=${id}&nodeType=${nodeType}`))

export const getCurrentTime = () => _get(getUrl(`prop/current-time`))


export const getScoreInfo = (address) => _get(getUrl(`user/scoreInfo?publicKey=${address}`))

export const getTotalNewReward = (num) => _get(getUrl(`rewardPoolRecord/getTotalNewReward?phase=${num}`))



//

export const getPreviousNum = () => _get(getUrl(`config/phash_num`))



export const getNormalPreSup= id => _post(getUrl(`user/node?id=${id}&nodeType=PRE_SUPER`))



export const getNormalSuper= id => _post(getUrl(`user/node/supper?id=${id}`))



export const getTotal = () => _get(getUrl(`config/total_reward`))



export const getValuePriceList = () => _get(getUrl(`token/line_chart`))



export const getNormal= (id) => _post(getUrl(`user/node?id=${id}&nodeType=PRE_NORMAL`))

