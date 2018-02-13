const RootQuery = require('./root-query')
const AllUsers = require('./all-users')
const AllModerators = require('./all-moderators')
const AllDebaters = require('./all-debaters')
const relations = require('./relations')
const AllCards = require('../all-cards')
const TopicsByUser = require('./topics-by-user')
const UserStats = require('./user-stats')
const userSearch = require('./user-search')
const FollowModerator = require('./follow-moderator')

module.exports = {
  RootQuery,
  User: relations,
  AllUsers,
  AllModerators,
  AllDebaters,
  AllCards,
  TopicsByUser,
  UserStats,
  userSearch,
  FollowModerator
}
