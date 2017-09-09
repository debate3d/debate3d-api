const RootQuery = require('./root-query')
const relations = require('./relations')
const AllTopics = require('./all-topics')
const AllCards = require('../all-cards')
const AllVotes = require('../all-votes')

module.exports = {
  RootQuery,
  Topic: relations,
  AllTopics,
  AllCards,
  AllVotes
}
