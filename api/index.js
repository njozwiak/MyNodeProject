const R = require('ramda');
const { makeExecutableSchema } = require('graphql-tools');
const { UserTypes } = require('./user/schema');
const {
    SchemaDefinition,
    RootQuery,
    RootMutation,
    RootResolvers,
} = require('./schema');

module.exports = makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        RootQuery,
        RootMutation,
        UserTypes
    ],
    resolvers: R.mergeAll([
        RootResolvers
    ])
});
