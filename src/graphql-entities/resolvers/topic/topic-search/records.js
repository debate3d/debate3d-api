const loadQueryBase = require('./load-query-base')

const records = ({ filter }, args, { db }) => {
  return loadQueryBase(db, filter)
}

module.exports = records
