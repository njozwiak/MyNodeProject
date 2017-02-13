const _ = require('lodash');
const configAll = require('./env/all');
const configEnv = require(`./env/${process.env.NODE_ENV}`);

module.exports = _.merge({}, configEnv, configAll);