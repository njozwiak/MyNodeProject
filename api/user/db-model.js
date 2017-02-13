class User {
    constructor(userId, firstname, lastname, age, password) {
        this.userId = userId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.password = password;
    }
}

module.exports.User = User;