import axios from 'axios'
import config from '../utils/config'

// Preventing IE Cache
if (navigator.userAgent.indexOf('MSIE 9') > -1) {
  axios.defaults.headers.common['If-Modified-Since'] = '0'
}

const Request = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

Request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// response
Request.interceptors.response.use(res => {
  if (res.data.code === 200 || res.status == 200) {
    return res.data
  } else {
    return Promise.reject(res)
  }
}, error => {
  let msg = ''
  if (error.response) {
    if (error.response && error.response.message) {
      msg = error.response.message
    } else {
      msg = error.response
    }
  } else {
    msg = error.message
  }
  console.log('api response error: ', msg)
  return Promise.reject(msg)
})

export const _get = (url, params = null) => {
  return Request.get(url, { params: params })
}

export const _post = (url, data) => {
  return Request.post(url, data)
}
const getUrl = (url) => {
  return config.nodeUrl + url
}
/**
 * Querying user Rankings
 *  address token address
 */
// export const getCurrentTime = () => _get(getUrl('/trigger/pool-user/current-time'))
export const getCurrentTime = () => _get(getUrl('prop/current-time'))
export const getCurrentTime0 = () => _get(getUrl('prop/timestamp-of-zero-clock-one-the-day'))
