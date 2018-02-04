const { defaultsDeep } = require('lodash')
const user = require('./user')
const card = require('./card')
const topic = require('./topic')

const mutations = [ user, card, topic ]

const RootMutation = {}

module.exports = defaultsDeep({ RootMutation }, ...mutations)
