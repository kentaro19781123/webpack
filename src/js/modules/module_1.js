'use strict'

export const modules = {
  modulesConsole (el) {
    el.innerHTML = 'js-itemです'
  },
  modulesClick () {
    const arr = [1, 2, 3]
    const arry = () => console.log(...arr)
    arry()
  }
}

export default modules
