const { map } = require('lodash')

const getUid = list => map(list, 'uid')

/**
 * get uuids
 * @param  {Function}  db  knex instance
 * @param  {String}  table
 * @param  {Object}  where
 * @return {Promise}
 */
module.exports = async (db, table, where) => {
  const list = await db(table).select('uid').where(where).then(getUid)
  return list
}
