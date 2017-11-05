const { pickBy, identity, isEmpty } = require('lodash')

/**
 * @method loadQueryBase
 * @param  {Function} db   knex instance
 * @param  {Object} filter
 * @return {Promise}
 */
const loadQueryBase = (db, filter) => {
  const { email, nickname } = filter
  const isEqual = filter.is_equal || false

  const query = db('users')

  if (isEqual) {
    const conditions = pickBy({ email, nickname }, identity)

    return query.where(conditions)
  }

  return isEmpty(email)
    ? query.whereRaw(`nickname ilike '%${nickname}%'`)
    : query.whereRaw(`email ilike '%${email}%'`)
}

module.exports = loadQueryBase
