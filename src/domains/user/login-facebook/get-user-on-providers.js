const { isEmpty } = require('lodash')
const { curry, head } = require('ramda')

const ifExists = require('./if-exists')
const factoryProvider = require('./factory-provider')

/**
 * insert provider on database
 * @param  {Function} db knex instance
 * @param  {Object} data
 * @param  {Object} user
 * @return {Promise}
 */
const insertProvider = (db, data, user) => {
  const provider = factoryProvider(data, user)
  const fields = Object.keys(provider)
  return db('providers').insert(provider).returning(fields).then(head)
}

const insertOrReturnObject = curry((db, data, user, provider) => {
  return isEmpty(provider) ? insertProvider(db, data, user) : provider
})

/**
 * return user by providers table
 * @param  {Function} db knex instance
 * @param  {Number} id   facebook id
 * @return {Promise}
 */
const getUserOnProviders = (db, data, user) => {
  const { id } = data
  return db('providers').where({ auth_code: id }).first()
    .then(ifExists)
    .then(insertOrReturnObject(db, data, user))
}

module.exports = curry(getUserOnProviders)
