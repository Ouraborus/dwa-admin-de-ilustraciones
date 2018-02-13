import templateLogin from './login.pug'
import { LoginModel } from '../../model/login/loginModel.js'

export class Login {
  constructor (node) {
    this.node = document.querySelector(node)
    this.elements = {}

    this.fillHTML()
    this.setElmts()
    this.setLogin()
    this.elements.signup = this.node.querySelectorAll('.js-signup')
    this.elements.loginModel = new LoginModel()
    this.setSignUp()
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
  setSignUp () {
    this.elements.signup[3].addEventListener('click', () =>
      this.elements.loginModel.userSignUp(this.elements.signup[0].value, this.elements.signup[1].value, this.elements.signup[2].value))
  }
}
