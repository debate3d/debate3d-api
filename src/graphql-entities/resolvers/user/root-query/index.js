const singleUser = (db, uid) => db('users').where({ uid }).first()

const me = (root, args, { $loadUser, db }) => $loadUser(user => singleUser(db, user.uid))

const user = (root, { uid }, { dataLoader }) => dataLoader.users.load(uid)

const users = require('../all-users')
const moderators = require('../all-moderators')
const debaters = require('../all-debaters')

module.exports = {
  me,
  user,
  users,
  moderators,
  debaters
}
