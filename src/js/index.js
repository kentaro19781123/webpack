'use strict'

// import 'lazysizes'
// import 'lazysizes/plugins/unveilhooks/ls.unveilhooks'
// import { closestEl } from './modules/closestEl'

const PROJECTNAME = {
  init () {
    console.log('あ')

    const arr = [1, 2, 3]
    const arry = () => console.log(...arr)
    arry()
  }
}

PROJECTNAME.init()

window.PROJECTNAME = PROJECTNAME
