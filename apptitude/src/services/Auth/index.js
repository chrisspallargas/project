import * as firebase from 'firebase';

export default class Auth {
  static async signup(email, password) {
    let error = null;

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
			error = err.code;
    }
    return error;
  }

  static async login(email, password) {
    let error = null;

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
			error = err.code;
    }
    return error;
  }

  static getErrorMessage(code){
		console.log("TCL: AuthService -> staticgetErrorMessage -> code", code)
    const errMsg = ERROR_MESSAGES[code];
    return errMsg || 'Error inesperado';
  }

  static registerAuthObserver(callback){
    return firebase.auth().onAuthStateChanged(callback);
  }

  static logout() {
    firebase.auth().signOut();
  }
}

const ERROR_MESSAGES = {
  'auth/weak-password'        : 'Password must have a minimum of 6 characters',
  'auth/invalid-email'        : 'Invalid email',
  'auth/email-already-in-use' : 'User is already registered',
  'auth/wrong-password'       : 'Invalid user or password',
  'auth/user-not-found'       : 'This user does not exists'
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    //GetData: Pasandole un email te retornará toda la información del usuario con ese email.
    // users=[{ name: 'Christina', email: 'chrisspallargas@gmail.com', password: 'skylab' }];


    // getData(email) {
    //     for (let i = 0; i < this.users.length; i++) {
    //         if (this.users[i].email === email) {
    //             return this.users[i];
    //         }

    //     }
    //     return -1;
    // }

    // getName(email) {
    //     for (let i = 0; i < this.users.length; i++) {
    //         if (this.users[i].email === email) {
    //             return this.users[i].name;
    //         }

    //     }
    //     return -1;
    // }

    // //CheckPass
    // passIsCorrect(email, password) {
    //     for (let i = 0; i < this.users.length; i++) {
    //         if (this.users[i].email === email) {
    //             return this.users[i].password === password;
    //         }
    //     }
    //     return false;
    // }

    // //Para saber pasandole el email si un usuario ya está registrado
    // userExists(email) {
    //     for (let i = 0; i < this.users.length; i++) {
    //         if (this.users[i].email === email) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // //Para crear un usuario nuevo
    // createUser(name, email, password){
    //     this.users.push({name:name, email:email, password:password});
    //     //console.log(this.users);
    // }


