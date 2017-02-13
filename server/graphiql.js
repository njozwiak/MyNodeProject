const config = require('../config');
const router = require('koa-router')();
const { graphiqlKoa } = require('graphql-server-koa');

module.exports = function addGraphiqlRoute(app) {
    if (config.useGraphiQL) {
        router.all('/', (ctx) => {
            ctx.redirect('/graphiql');
        });

        router.all('/graphiql', graphiqlKoa({
            endpointURL: '/graphql'
        }));

        app
            .use(router.routes())
            .use(router.allowedMethods());
    }
};