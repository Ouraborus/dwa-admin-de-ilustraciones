import template from './card.pug'

export class Card {
  constructor (node, data) {
    this.node = node
    this.fillHtml(data)
  }
  fillHtml (data) {
    this.node.innerHTML += template(data)
  }
}
