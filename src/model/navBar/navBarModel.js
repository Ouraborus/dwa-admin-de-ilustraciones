import config from '../../data/api.json'
import { GridModel } from '../../model/grid/gridModel.js'

var firebase = require('firebase')
firebase.initializeApp(config)

export class NavBarModel {
  constructor () {
    this.gridModel = new GridModel()
  }
  signOut () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        firebase.auth().signOut().then(function () {
          window.location = './index.html'
        }).catch(function (error) {
          console.log(error)
        })
      } else {
        /* eslint-disable */
        alert('Already outside')
        /* eslint-enable */
      }
    })
  }
  createCard (title, description, date, url) {
    const cardData = {
      title: title,
      description: description,
      date: date,
      url: url
    }
    this.gridModel.addCard(cardData)
  }
}
