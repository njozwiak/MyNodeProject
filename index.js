const Koa = require('koa');
const parser = require('koa-bodyparser');
const graphqlSchema = require('./api');
const addGraphqlRoute = require('./server/graphql');
const addGraphiqlRoute = require('./server/graphiql');

const app = new Koa();

app.use(parser());

addGraphiqlRoute(app);

addGraphqlRoute(app, graphqlSchema);

module.exports = app;
