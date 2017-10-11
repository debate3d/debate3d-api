const { curry } = require('ramda')

/**
 * set user to subscriber
 * @param  {Function} db   Knex instance
 * @param  {Object} data
 * @param  {Object} result
 * @return {Promise}
 */
module.exports = curry((db, data, result) => {
  return db('users')
    .update({ subscriber: true })
    .where({ uid: data.uid_user })
    .returning('uid')
})
