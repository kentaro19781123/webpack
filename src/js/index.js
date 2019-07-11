'use strict'

import module1 from './modules/module_1'

const PROJECTNAME = {
  init () {
    const item = document.body.querySelector('.js-item')
    module1.modulesConsole(item)
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
  }
}

PROJECTNAME.init()
PROJECTNAME.clickEvent()

window.PROJECTNAME = PROJECTNAME
