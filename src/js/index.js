'use strict'

import module1 from './modules/module_1'
// import module2 from './modules/module_2'
import module3 from './modules/module_3'
import module4 from './modules/module_4'
import ac from './modules/ac'

const PROJECTNAME = {
  init () {
    const item = document.body.querySelector('.js-item')
    if (!item) {
      return
    }
    module1.modulesConsole(item)
  },
  // init2 () {
  //   const item = document.body.querySelector('.js-ajax')
  //   if (!item) {
  //     return
  //   }
  //   module2.checkapi(item)
  // },
  clickEvent (items = document.body.querySelectorAll('.js-item')) {
    if (!items.length) {
      return
    }

    for (const item of items) {
      item.addEventListener('click', () => {
        module1.modulesClick()
      })
    }
  },
  scrollFunc () {
    // window.addEventListener('scroll', () => {
    //   module3()
    // })
    module3()
  },
  inputFunc () {
    const currentPosBtn = document.querySelector('.js-current')
    const hiddenInput = document.querySelector('.js-hidden');
    currentPosBtn.addEventListener('click', (e) => {
      e.preventDefault()
      const target = e.currentTarget
      module4(target)
      const lat = target.dataset.lat
      hiddenInput.setAttribute('value', lat);
    });
  },
  acFunc (items = document.body.querySelectorAll('.js-box')) {
    if (!items.length) {
      return
    }
    for (const item of items) {
      ac(item)
    }
  }
}

PROJECTNAME.init()
// PROJECTNAME.init2()
PROJECTNAME.clickEvent()
PROJECTNAME.scrollFunc()
PROJECTNAME.inputFunc()
PROJECTNAME.acFunc()


window.PROJECTNAME = PROJECTNAME
