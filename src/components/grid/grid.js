import { Card } from '../card/card.js'
import template from './grid.pug'

export class Grid {
    constructor(selector, cards) {
        this.node = document.querySelector(selector)
        this.elements.cards = {}

        this.fillHtml()
        this.loadCards(cards)
    }
    fillHtml() {
        this.node.innerHTML = template()
    }
    loadCards(cards) {
        cards.forEach(element => {
            this.elements.cards.push(new Card(element))
        })
    }
}
