const { defaultsDeep } = require('lodash')
const RootQuery = require('./root-query')
const User = require('./user')
const Topic = require('./topic')
const Card = require('./card')
const Vote = require('./vote')
const Reaction = require('./reaction')
const Deck = require('./deck')
const Position = require('./position')
const Tag = require('./tag')

const entities = [
  Card,
  Deck,
  Position,
  Reaction,
  Vote,
  Tag,
  Topic,
  User
]

module.exports = defaultsDeep({ RootQuery }, ...entities)
