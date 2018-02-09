import template from './card.pug'

export class Card {
  constructor (selector, data) {
    this.node = document.querySelector(selector)
    this.fillHtml(data)
  }
  fillHtml (data) {
    this.node.innerHTML += template(data)
  }
}
