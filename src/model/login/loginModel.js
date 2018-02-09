import config from '../../data/api.json'
var firebase = require('firebase')
export class LoginModel {
  constructor () {
    this.email = null
    this.password = null

    this.initialize()
    this.loginSucceeded()
  }
  initialize () {
      // Initialize Firebase
    firebase.initializeApp(config)
  }

  loginValidate (email, password) {
      /* eslint-disable */
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      alert(error)
      /* eslint-enable */
    })
  }

  loginSucceeded () {
      /* eslint-disable */    
    firebase.auth().onAuthStateChanged(function (user) {
      /* eslint-enable */
      if (user) {
        // User is signed in.
        window.location = './dashboard.html'
      }
    })
  }
}
