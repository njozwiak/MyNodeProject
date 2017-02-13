const userService = require('./user/service');

const RootQuery = `
  type Query {
    # Get a user
    user (
      userId: Int!
    ): User
    # Get a list of users
    users: [User!]!
    }
`;

const RootMutation = `
  type Mutation {
    # Add a user and return a new refresh token and session
    createUser (
      userId: Int!
      firstname: String!
      lastname: String!
      age: Int!
      password: String!
    ): User
    }
`;

const SchemaDefinition = `
  schema {
    query: Query,
    mutation: Mutation,
  }
`;

const RootResolvers = {
    Query: {
        async user(root, { userId }, ctx) {
            return userService.getUserById(userId);
        },
        async users() {
            return userService.getAllUsers();
        }
    },
    Mutation: {
        async createUser(root, user) {
            return userService.createUser(user);
        }
    }
};

module.exports.SchemaDefinition = SchemaDefinition;
module.exports.RootQuery = RootQuery;
module.exports.RootMutation = RootMutation;
module.exports.RootResolvers = RootResolvers;