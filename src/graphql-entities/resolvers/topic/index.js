const RootQuery = require('./root-query')
const relations = require('./relations')
const AllTopics = require('./all-topics')
const AllCards = require('../all-cards')
const AllVotes = require('../all-votes')
const topicSearch = require('./topic-search')
const FollowTopic = require('./follow-topic')

module.exports = {
  RootQuery,
  Topic: relations,
  AllTopics,
  AllCards,
  AllVotes,
  topicSearch,
  FollowTopic
}
