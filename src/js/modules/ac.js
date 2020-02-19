'use strict'

export default item => {
  const selectShowClass = 'u-show'

  item.addEventListener('click', () => {
    console.log(0)
    item.classList.toggle(selectShowClass)
  })
  document.addEventListener('click', (e) => {
    if (e.target !== item) {
      item.classList.remove(selectShowClass)
    }
  })
}
