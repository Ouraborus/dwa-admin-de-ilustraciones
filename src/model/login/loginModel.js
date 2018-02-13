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
  userSignUp (name, email, password) {
    if (password.length >= 8 && /(?=.*[0-9])/.exec(password) && /(?=.*[!@#$%^&*"])/.exec(password)) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      // .then(
      //       firebase.database().ref('users/' + firebase.auth().user.uid).set({
      //         username: name,
      //         email: email
      //       })
      // )
      .catch(function (error) {
        /* eslint-disable */
        alert(error)
        /* eslint-enable */
      })
    } else {
      /* eslint-disable */
      alert('Contraseña no cumple con los requerimientos')
      /* eslint-enable */
    }
  }
}
