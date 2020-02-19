'use strict'

export const modules = {
  modulesConsole (el) {
    el.innerHTML = 'js-item'
/////////////////////
    const dirList = ["aaa", "bbb", "ccc"]
    const deviceList = {
      "device": ["pc", "sp"],
      "type": ["img", "svg"]
    }
    const fileName = ["あああ","いいい","ううう"]
    console.log(dirList)
    console.log(deviceList)
    console.log(fileName)



///////////////////
  },
  modulesClick () {
    const arr = [1, 2, 3]
    const arry = () => console.log(...arr)
    arry()
  }
}

export default modules
