const UserType = `
    type User {
        # The id of the user
        id: Int!
        # The first name
        firstname: String!
        # The last name
        lastname: String!
        # The age
        age: Int!
        # The password of the user
        password: String!
    }`;

module.exports.UserTypes = () => [UserType];
