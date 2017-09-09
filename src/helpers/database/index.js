const { curry } = require('lodash')

/*
 * SELECT METHODS
*/
const select = curry((query, fields) => query.select(fields))

const selectWhere = curry((query, fields, where) => select(query, fields).where(where))

const selectLimit = curry((query, fields, limit) => select(query, fields).limit(limit))

const selectLimitOffset = curry((query, fields, limit, offset) => select(query, fields).limit(limit).offset(offset))

const selectWhereLimitOffset = curry((query, fields, where, limit, offset) => selectWhere(query, fields, where).limit(limit).offset(offset))

const countRegisters = curry((query) => query.count('*'))

/*
 * COUNT METHODS
*/
const countField = (query, count = 'uid', where) => query.where(where).count(count)

/*
 * INCREMENT METHODS
*/
const increment = (query, field, where, value) => query.where(where).increment(field, value)

const decrement = (query, field, where, value) => query.where(where).decrement(field, value)

/*
 * UPDATES METHODS
*/
const update = curry((query, values, where, field = 'uid') => query.update(values).where(where).returning(field))

/*
 * INSERT METHODS
*/
const insert = curry((query, obj, field = 'uid') => query.insert(obj).returning(field))

/*
 * GROUP BY and ORDER BY
*/
const groupBy = curry((query, fields, count, where = {}) => query.select(fields).where(where).count(count).groupBy(count).orderByRaw(`count(${count}) desc`))

/*
 * DELETE METHODS
*/
const deleteResource = curry((query, where) => query.where(where).delete())

/*
 * Insert query
*/
const insertQuery = require('./insert')

const hasEntity = require('./has-entity')

const isAuthor = require('./is-author')

const updateQuery = require('./update')

const deleteQuery = require('./delete')

module.exports = {
  countField,
  select,
  selectWhere,
  selectLimit,
  selectLimitOffset,
  selectWhereLimitOffset,
  update,
  countRegisters,
  insert,
  deleteResource,
  increment,
  decrement,
  groupBy,
  insertQuery,
  hasEntity,
  isAuthor,
  updateQuery,
  deleteQuery
}
