export default class LoginModel {
    constructor(){
        this.email = null
        this.password = null
    }

    loginValidate(email, password){
        firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error) {
            alert(error)
        });
    }
}
