const singleUser = (db, uid) => db('users').where({ uid }).first()

const me = (root, args, { $loadUser, db }) => $loadUser(user => singleUser(db, user.uid))

const user = (root, { uid }, { dataLoader }) => dataLoader.users.load(uid)

const userSearch = (root, { filter }, { db }) => {
  const { email, nickname } = filter
  const query = db('users')
  if (email) {
    query.whereRaw(`email ilike '%${email}%'`)
  }
  return query.where({ nickname })
}

const users = require('../all-users')
const moderators = require('../all-moderators')
const debaters = require('../all-debaters')

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
