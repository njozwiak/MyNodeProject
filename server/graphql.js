const router = require('koa-router')();
const { graphqlKoa } = require('graphql-server-koa');


module.exports = async function addGraphqlRoute(app, graphqlSchema) {
    router.all('/graphql', graphqlKoa({
        schema: graphqlSchema,
        graphiql: true
    }));

    app.use(router.routes()).use(router.allowedMethods());
};