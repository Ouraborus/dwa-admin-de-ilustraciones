var firebase = require('firebase')

export class GridModel {
  constructor () {
    this.database = firebase.database().ref('users/')
    // this.user = this.loadUser()
    this.cards = []
    console.log(this.user)
  }
}
