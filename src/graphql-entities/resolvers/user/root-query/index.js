const debaters = require('../all-debaters')
const me = require('./me')
const moderators = require('../all-moderators')
const user = require('./user')
const userSearch = require('./user-search')
const users = require('../all-users')

const userStats = (root, args, { db }) => {
  return args
}

module.exports = {
  me,
  user,
  users,
  userStats,
  userSearch,
  moderators,
  debaters
}
