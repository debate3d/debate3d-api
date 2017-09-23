const { loadDataByTable, loadDataByLoader } = require('./loaders')
const { isFunction } = require('lodash')
const tables = require('./tables')

/**
 * factory for loaders
 * @param  {Function} db knex instance
 * @return {Object}
 */
const factory = db => Object.keys(tables).reduce((acc, key) => {
  const value = tables[key]
  acc[key] = (isFunction(value))
    ? loadDataByLoader(value, db)
    : loadDataByTable(value, db)

  return acc
}, {})

module.exports = factory
