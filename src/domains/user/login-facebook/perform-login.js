const { curry } = require('ramda')

const { createToken } = require('../../../helpers/auth')

/**
 * return token from user
 * @param  {String} uid
 * @return {Promise}
 */
const returnToken = uid => {
  const token = createToken({ uid })
  return Promise.resolve({ token })
}

/**
 * create user or return token
 * @param  {Function} db   knex instance
 * @param  {Object} data   object from mutation
 * @param  {Object} result
 * @return {Promise}
 */
const perfomLogin = (db, provider) => returnToken(provider.uid_user)

module.exports = curry(perfomLogin)
