'use strict'

import axios from 'axios'

export const ajax = {
  xhr (url, param) {
    return axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      url: url,
      data: JSON.stringify(param),
      timeout: 10000
    })
  },

  xhrCatch (errorObj) {
    if (!errorObj.status) {
      console.log(errorObj)

      return
    }

    const statusCode = errorObj.status

    switch (true) {
      case statusCode === 401:
        location.href = errorObj.data.response_data.url
        break

      case statusCode === 503:
        location.href = '/maintenance'
        break

      case statusCode !== 200:
        location.href = '/error'
        break

      default:
        break
    }
  }
}
