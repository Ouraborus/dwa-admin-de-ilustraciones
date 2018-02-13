import { Card } from '../card/card.js'

export class Grid {
  constructor (selector, cards) {
    this.node = document.querySelector(selector)
    this.elements = {}
    this.cards = []

    this.loadCards(cards)
  }

  loadCards (cards) {
    cards.forEach(element => {
      this.cards.push(new Card(this.node, element))
    })
  }
}
