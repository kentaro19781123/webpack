'use strict'

import { ajax } from './ajax'

export const checkApi = {
  checkapi (el) {
    const endPoint = document.body.querySelector('.js-ajax').dataset.api
    const param = {
      pref: el.dataset.param
    }

    ajax.xhr(endPoint, param)
      .then((response) => {
        if (response.data.status === 200) {
          let item = ''
          response.data.item.forEach((responseData) => {
            item += `
              <p>pref:${responseData.pref}</p>
              <p>pref_code:${responseData.pref_code}</p>
              <p>url:${response.data.url}</p>
            `
          })
          el.innerHTML = item
        }
      })
      .catch((e) => {
        ajax.xhrCatch(e.response)
      })
  }
}

export default checkApi
