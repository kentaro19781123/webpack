'use strict'

export default function module4 () {
  const item = document.body.querySelector('.js-input')
  item.dataset.val = 'bb';
  item.value = item.dataset.val
}
