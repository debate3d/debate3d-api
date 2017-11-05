const { pickBy, identity, isEmpty } = require('lodash')

/**
 * @method loadQueryBase
 * @param  {Function} db   knex instance
 * @param  {Object} filter
 * @return {Promise}
 */
const loadQueryBase = (db, filter) => {
  const isEqual = filter.is_equal || false
  const { title, nickname } = filter

  const query = db('topics')

  if (isEqual) {
    const conditions = pickBy({ title, nickname }, identity)

    return query.where(conditions)
  }

  return isEmpty(title)
    ? query.whereRaw(`nickname ilike '%${nickname}%'`)
    : query.whereRaw(`title ilike '%${title}%'`)
}

module.exports = loadQueryBase
