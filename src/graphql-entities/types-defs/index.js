const { loadGraphQLFiles } = require('../../helpers/common')
const usersGraphql = require('./user')

module.exports = [
  ...usersGraphql,
  loadGraphQLFiles(__dirname)
]
