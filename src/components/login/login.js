import templateLogin from './login.pug'
import { LoginModel } from '../../model/login/loginModel.js'

export class Login {
  constructor (node) {
    this.node = document.querySelector(node)
    this.elements = {}

    this.fillHTML()
    this.setElmts()
    this.setLogin()
    this.elements.loginModel = new LoginModel()
  }
  fillHTML () {
    this.node.innerHTML = templateLogin()
  }
  setElmts () {
    this.elements.login = this.node.querySelector('.js-login')
    this.elements.email = this.node.querySelector('.js-email')
    this.elements.pass = this.node.querySelector('.js-pass')
  }
  setLogin () {
    this.elements.login.addEventListener('click', this.callLogIn.bind(this))
  }

  callLogIn () {
    const email = this.elements.email.value
    const pass = this.elements.pass.value
    this.elements.login.classList.add('hidden')
    this.elements.loginModel.loginValidate(email, pass)
  }
}
