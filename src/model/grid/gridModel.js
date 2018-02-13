var firebase = require('firebase')

export class GridModel {
    constructor() {
        this.database = firebase.database().ref('users/')
        this.user = this.loadUser()
        this.cards = []
        console.log(this.user)

    }

    loadUser() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user.uid)
                var ref = firebase.database().ref();
                ref.on("value", function (snapshot) {
                    console.log(snapshot.val());
                }, function (error) {
                    console.log("Error: " + error.code);
                });
            }
        })

    }
}
