import config from '../../data/api.json'

var firebase = require('firebase')
firebase.initializeApp(config)

export class NavBarModel {
  signOut () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log('called')
        firebase.auth().signOut().then(function () {
          window.location = './index.html'
        }).catch(function (error) {
          console.log(error)
        })
      } else {
        console.log('already outside')
      }
    })
  }

  addCard (title, description, date, url) {
    firebase.database().ref('cards/' + firebase.auth().user.uid).set({
      title: title,
      description: description,
      date: date,
      url: url
    })
  }
}
