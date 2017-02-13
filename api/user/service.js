const userRepository = require('./db-repository');

module.exports.getUserById = function getUserById (id) {
    return userRepository.getUserById(id);
};

module.exports.createUser = function createUser ({userId, firstname, lastname, age, password}) {
  const userToCreate = {
      userId,
      firstname,
      lastname,
      age,
      password
  };

  return userRepository.createUser(userToCreate);
};

module.exports.getAllUsers = userRepository.getAllUsers;