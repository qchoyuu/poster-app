import axios from 'axios'

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
  if (res.data.code === 200) {
    return res.data.data
  } else {
    return Promise.reject(res.data)
  }
}, error => {
  let msg = ''
  if (error.response) {
    if (error.response.data && error.response.data.message) {
      msg = error.response.data.message
    } else {
      msg = error.response.data
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
