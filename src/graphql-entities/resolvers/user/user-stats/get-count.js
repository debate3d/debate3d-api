const { prop } = require('ramda')

/**
 * get count abstraction
 * @param  {Function} db  knex istance
 * @param  {String} table table name
 * @param  {Object} where condition
 * @return {Promise}
 */
module.exports = (db, table, where) => {
  return db(table).where(where).count().first().then(prop('count'))
}
