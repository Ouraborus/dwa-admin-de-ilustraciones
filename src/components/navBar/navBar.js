import template from './navBar.pug'
import { NavBarModel } from '../../model/navBar/navBarModel.js'

export class NavBar {
  constructor (node) {
    this.node = document.querySelector(node)
    this.navBarModel = new NavBarModel()
    this.elements = {}

    this.fillHtml()
    this.setElements()
    this.setNavAnimation()
    this.setActions()
  }
  setActions () {
    this.elements.signout.addEventListener('click', this.navBarModel.signOut)
    this.elements.addcard.addEventListener('click', this.navBarModel.createCard('CARTA', 'Content Description', '12/22/1996', 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png'))
  }
  setElements () {
    this.elements.menu = this.node.children[0]
    this.elements.navbar = this.node.children[2]
    this.elements.signout = this.node.querySelector('.js-sign-out')
    this.elements.addcard = this.node.querySelector('.js-add-card')
    this.elements.activeElmt = undefined
  }

  fillHtml () {
    this.node.innerHTML = template()
  }
  setNavAnimation () {
    this.elements.menu.addEventListener('click', () => {
      this.toggleElmt(this.elements.menu, 'active')
      this.toggleElmt(this.elements.navbar, 'navbar__list--active')
      this.toggleElmt(document.body, 'navbar__background')
    })
  }
  toggleElmt (element, data) {
    element.classList.toggle(data)
  }

  dropDownController (actual, selected, data) {
    if (actual === undefined || actual === selected) {
      this.elements.activeElmt = selected
      this.elements.activeElmt.classList.toggle(data)
    } else {
      actual.classList.add(data)
      this.elements.activeElmt = selected
      this.elements.activeElmt.classList.remove(data)
    }
  }
}
