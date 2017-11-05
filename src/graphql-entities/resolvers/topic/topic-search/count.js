const { get } = require('lodash')

const loadQueryBase = require('./load-query-base')

/**
 * @method getCount
 * @param  {Object} row
 * @return {Number}
 */
const getCount = row => get(row, 'count', 0) || 0

const count = ({ filter }, args, { db }) => {
  return loadQueryBase(db, filter)
    .count('uid')
    .first()
    .then(getCount)
}

module.exports = count
