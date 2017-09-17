const RootQuery = require('./root-query')
const AllUsers = require('./all-users')
const AllModerators = require('./all-moderators')
const AllDebaters = require('./all-debaters')
const relations = require('./relations')
const AllCards = require('../all-cards')

module.exports = {
  RootQuery,
  User: relations,
  AllUsers,
  AllModerators,
  AllDebaters,
  AllCards
}
