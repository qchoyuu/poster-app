import config from "../config"
// Deep copy data
export const copy = data => {
  return JSON.parse(JSON.stringify(data))
}

// Check whether the device is a mobile terminal
export const isMobile = () => {
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  )
  return flag
}

// Check the address
export const checkAddress = (address) => {
  const reg = /^0x[0-9a-zA-Z]{40}$/
  return reg.test(address)
}

// Dealing with scientific notation
export const toolNumber = (num) => {
  num = num.toString()
  if (num.indexOf('+') !== -1) {
    num = num.replace('+', '')
  }
  if (num.indexOf('E') !== -1 || num.indexOf('e') !== -1) {
    var resValue = ''
    var power = ''
    var result = null
    var dotIndex = 0
    var resArr = []
    var sym = ''
    var numStr = num.toString()
    if (numStr[0] === '-') {
      //  If it is a negative number, change it to a positive number, remove the '-' sign and save the '-'.
      numStr = numStr.substr(1)
      sym = '-'
    }
    if (numStr.indexOf('E') !== -1 || numStr.indexOf('e') !== -1) {
      var regExp = new RegExp(
        '^(((\\d+.?\\d+)|(\\d+))[Ee]{1}((-(\\d+))|(\\d+)))$',
        'ig',
      )
      result = regExp.exec(numStr)
      if (result != null) {
        resValue = result[2]
        power = result[5]
        result = null
      }
      if (!resValue && !power) {
        return false
      }
      dotIndex = resValue.indexOf('.') === -1 ? 0 : resValue.indexOf('.')
      resValue = resValue.replace('.', '')
      resArr = resValue.split('')
      if (Number(power) >= 0) {
        var subres = resValue.substr(dotIndex)
        power = Number(power)
        // A power greater than the number of digits behind the decimal point is followed by 0
        for (let i = 0; i <= power - subres.length; i++) {
          resArr.push('0')
        }
        if (power - subres.length < 0) {
          resArr.splice(dotIndex + power, 0, '.')
        }
      } else {
        power = power.replace('-', '')
        power = Number(power)
        // Exponents greater than or equal to the index position of the decimal point, preceded by 0
        for (let i = 0; i < power - dotIndex; i++) {
          resArr.unshift('0')
        }
        var n = power - dotIndex >= 0 ? 1 : -(power - dotIndex)
        resArr.splice(n, 0, '.')
      }
    }
    resValue = resArr.join('')

    return sym + resValue
  } else {
    return num
  }
}

/**
 * Keep n decimal places - do not round
 * @return {number}
 */
export const formatDecimal = (num, decimal) => {
  num = num.toString()
  if (num.indexOf('-') > -1) {
    return 0
  }
  if (num.indexOf('.') === -1 || num.split('.')[1].length <= decimal) {
    return num
  }
  if (decimal === 0) {
    return num.split('.')[0]
  }
  var a = num.split('.')[0]
  var b = num.split('.')[1]
  if (num.indexOf('.0000') === -1) {
    return a + '.' + b.substring(0, decimal).replace(/0+$/, '')
  } else {
    return a + '.0000'
  }
}

/**
 * Get time atomic information
 * @return {Object} result
 */
export const getTimeAtom = (t) => {
  if (!t) {
    return null
  }
  const dt = new Date(t)
  const year = dt.getFullYear()
  const month = doubleDigit((dt.getMonth() + 1))
  const date = doubleDigit(dt.getDate())
  const hours = doubleDigit(dt.getHours())
  const minutes = doubleDigit(dt.getMinutes())
  const seconds = doubleDigit(dt.getSeconds())
  return { year, month, date, hours, minutes, seconds }
}
/**
 * Convert to 2 digits
 * @return {String} result
 */
const doubleDigit = (n) => {
  return n.toString().padStart(2, '0')
}

// Convert seconds into minutes
export const formatTime = (value) => {
  const result = parseInt(value)
  const h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600)
  const m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
  const s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))

  let res = ''
  if (h !== '00') res += `${h}:`
  if (m !== '00') res += `${m}:`
  res += `${s}`
  return res
}
// Convert seconds into minutes
export const toHHMMSS = (secs) => {
  var secNum = parseInt(secs, 10)
  var hours = Math.floor(secNum / 3600)
  var minutes = Math.floor(secNum / 60) % 60
  var seconds = secNum % 60

  return [hours, minutes, seconds]
    .map(v => v < 10 ? '0' + v : v)
    .filter((v, i) => v !== '00' || i > 0)
    .join(':')
}

export const hex2int = (hex) => {
  hex = hex.toString().slice(2)
  return parseInt(hex, 16)
}

// Wallet address processing
export const walltUpadte = function (name) {
  if (!name) {
    return
  }
  var len = name.length - 5
  return [...name].map((item, index) => {
      if (index >= 6 && index < len) {
        return ''
      }
      if (index === len) {
        return '...'
      }
      if (index < 6 || index > len) {
        return item
      }
      return ''
    }).join('')
}

// get language name
const getLanguageName = function (lang) {
  const languageList = [
    { label: 'ENGLISH', key: 'en' },
    { label: '简体中文', key: 'zh' },
    { label: '繁體中文', key: 'zh_hk' },
    { label: 'français', key: 'fr' },
    { label: 'Español', key: 'es' },
    { label: '日本语', key: 'jp' },
    { label: '한국어', key: 'ko' },
    { label: 'русский', key: 'ru' },
    { label: 'DEUTSCH', key: 'de' },
  ]
  for (let i = 0; i < languageList.length; i++) {
    if (languageList[i].key === lang) {
      return languageList[i].label
    }
  }
}

export const timeCountDown = (time) => {
  var second = time
  var minute = 0
  var hour = 0
  minute = parseInt(second / 60) //
  second %= 60 //
  if (minute > 60) {
    //
    hour = parseInt(minute / 60)
    minute %= 60 //
  }
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second
  return { hm: `${hour}:${minute}`, s: second }
}

export const stopPropagation = (e)=> {
  e.nativeEvent.stopImmediatePropagation();
}

export const timeDayCountDown = (time) => {
  var second = time
  var minute = 0
  var hour = 0
  var day = 0
  minute = parseInt(second / 60)
  second %= 60
  if (minute > 60) {
    hour = parseInt(minute / 60)
    minute %= 60
  }
  if (hour > 24) {
    day = parseInt(hour / 24)
    hour %= 24
  }
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second
  return { day: day, h: hour,m: minute, s: second }
}

// get current time(s)
const getTimeSecond = () => {
  return Date.parse(new Date()) / 1000
}

// bignumber change k m g
export const nFormatter = (num, digits) => {
  if (isNaN(Number(num))) {
    return num
  }
  const si = [
    { value: 1, symbol: '' },
    { value: 1E3, symbol: 'K' },
    { value: 1E6, symbol: 'M' },
    { value: 1E9, symbol: 'G' },
    { value: 1E12, symbol: 'T' },
    { value: 1E15, symbol: 'P' },
    { value: 1E18, symbol: 'E' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  let i
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
}

/**
 * Keep n decimal places - do not round
 * @return {number || string}
 */
export const formatDecimalNew = (num, decimal) => {
  num = num.toString()
  if (num.indexOf('-') > -1) {
    return 0
  }
  if (num.indexOf('.') === -1 || num.split('.')[1].length <= decimal) {
    return num
  }
  if (decimal === 0) {
    return num.split('.')[0]
  }
  var a = num.split('.')[0]
  var b = num.split('.')[1]
  const subNum = b.substring(0, decimal).replace(/0+$/, '')
  if (subNum) {
    return a + '.' + subNum
  } else {
    if (b.replace(/0+$/, '') && a < 1) {
      if (decimal === 2) {
        return '<0.01'
      }
      if (decimal === 4) {
        return '<0.0001'
      }
      if (decimal === 6) {
        return '<0.000001'
      }
    } else {
      return a
    }
  }
}

export const networkList = [
  {
    id: 1,
    chainId16: '0x1',
    alias: 'eth',
    name: 'ETH',
    chainName: 'ETH',
    icon: 'img-eth',
    decimals: 18,
    nativeName: 'ETH Chain Native Token',
    symbol: 'ETH',
    blockNumberSpeed: 13000,
    rpcUrl: config.network.eth.rpcUrl,
    chainId: config.network.eth.chainId,
    blockUrl: config.network.eth.blockUrl,
  },
  {
    id: 3,
    chainId16: '0x38',
    alias: 'bsc',
    name: 'BSC',
    chainName: 'BSC',
    icon: 'img-bsc',
    decimals: 18,
    nativeName: 'Binance Chain Native Token',
    symbol: 'BNB',
    blockNumberSpeed: 3000,
    rpcUrl: config.network.bsc.rpcUrl,
    chainId: config.network.bsc.chainId,
    blockUrl: config.network.bsc.blockUrl,
  },
]

export const numberToArray = (num) => {
  let arr = []
  for(let i=0;i<num;i++){
    arr.push(i)
  }
  return arr
}

export default {
  copy,
  isMobile,
  getTimeAtom,
  toolNumber,
  formatDecimal,
  toHHMMSS,
  hex2int,
  walltUpadte,
  getLanguageName,
  timeCountDown,
  stopPropagation,
  timeDayCountDown,
  getTimeSecond,
  nFormatter,
  formatDecimalNew,
  networkList,
  numberToArray,
}
