const RootQuery = require('./root-query')
const AllUsers = require('./all-users')
const AllModerators = require('./all-moderators')
const AllDebaters = require('./all-debaters')
const relations = require('./relations')

module.exports = {
  RootQuery,
  User: relations,
  AllUsers,
  AllModerators,
  AllDebaters
}
