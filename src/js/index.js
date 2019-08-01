'use strict'

import module1 from './modules/module_1'
import module2 from './modules/module_2'
import module3 from './modules/module_3'

const PROJECTNAME = {
  init () {
    const item = document.body.querySelector('.js-item')
    if (!item) {
      return
    }
    module1.modulesConsole(item)
  },
  init2 () {
    const item = document.body.querySelector('.js-ajax')
    if (!item) {
      return
    }
    module2.checkapi(item)
  },
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
    window.addEventListener('scroll', () => {
      module3()
    })
  }
}

PROJECTNAME.init()
PROJECTNAME.init2()
PROJECTNAME.clickEvent()
PROJECTNAME.scrollFunc()

window.PROJECTNAME = PROJECTNAME
