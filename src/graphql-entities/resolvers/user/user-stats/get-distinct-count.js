const { sum } = require('ramda')
const { map } = require('lodash')

const getCounts = list => map(list, 'count')

/**
 * get sum of distinct counts
 * @param  {Function}  db     knex instance
 * @param  {String}  table
 * @param  {String}  prop
 * @param  {Array}  list
 * @param  {Object}  [where={ }]
 * @return {Promise}
 */
module.exports = async (db, table, prop, list, where = { }) => {
  return db(table)
    .where(where)
    .whereIn(prop, list)
    .distinct(prop)
    .groupBy(prop)
    .count()
    .then(getCounts)
    .then(sum)
}
