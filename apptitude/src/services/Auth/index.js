

export default class Auth {
    //GetData: Pasandole un email te retornará toda la información del usuario con ese email.
    users=[{ name: 'Christina', email: 'chrisspallargas@gmail.com', password: 'skylab' }];

    getData(email) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].email === email) {
                return this.users[i];
            }

        }
        return -1;
    }

    //CheckPass
    passIsCorrect(email, password) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].email === email) {
                return this.users[i].password === password;
            }
        }
        return false;
    }

    //Para saber pasandole el email si un usuario ya está registrado
    userExists(email) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].email === email) {
                return true;
            }
        }
        return false;
    }

    //Para crear un usuario nuevo
    createUser(name, email, password){
        this.users.push({name:name, email:email, password:password});
        //console.log(this.users);
    }
}

