var firebase = require('firebase')

export class GridModel {
  constructor () {
    this.database = firebase.database().ref()
    this.cards = []
  }
  addCard ({title, description, date, url}) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // https://firebase.google.com/docs/database/admin/save-data?hl=es-419
        firebase.database().ref(user.uid).push({
          title: title,
          description: description,
          date: date,
          url: url
        })
      }
    })
  }
}
