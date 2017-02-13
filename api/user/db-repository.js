const User = require('./db-model').User;
var _ = require('lodash');

var users = [];

module.exports.getUserById = function getUserById (userId) {
    return _.find(this.getAllUsers(), function(u){return u.userId === userId});
};

module.exports.getAllUsers = function getAllUsers() {
    if(users.length == 0) {
        users.push(new User(1, "firstName_1", "lastName_1", 20, "Pass_1"));
        users.push(new User(2, "firstName_2", "lastName_1", 25, "Pass_2"));
        users.push(new User(3, "firstName_3", "lastName_1", 35, "Pass_3"));
    }
    return users;
};

module.exports.createUser = function createUser (user) {
    users.push(user);
    return user;
};