import config from 'src/api/utils/config'
import { _get } from './indexStrong'

const getUrl = (url) => {
  return config.pancakeswrpUrl + url
}

export const getCatPrice = () => _get(getUrl('0x6892180D30f3468cdba339279E994Fdc864672da'))
