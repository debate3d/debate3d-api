const { defaultsDeep } = require('lodash')

const createdResolvers = require('./created-resolvers')
const receivedResolvers = require('./received-resolvers')

module.exports = defaultsDeep({ }, createdResolvers, receivedResolvers)
