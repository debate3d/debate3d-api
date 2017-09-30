const { defaultsDeep } = require('lodash')
const { resolvers, mutations } = require('../../../graphql-entities')
const scalars = require('./scalars')

module.exports = defaultsDeep({ }, resolvers, scalars, mutations)
