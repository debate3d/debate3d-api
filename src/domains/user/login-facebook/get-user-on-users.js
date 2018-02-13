const { isEmpty } = require('lodash')
const { curry, head } = require('ramda')

const ifExists = require('./if-exists')
const { factoryUser } = require('../support/factories')
const sendWelcomeEmail = require('../../sendgrid/client')

/**
 * create user or return the Object
 * @param  {Function} db knex instance
 * @param  {Object} data
 * @param  {Object} result
 * @return {Promise}
 */
const createOrReturnObject = curry((db, data, result) => {
  if (isEmpty(result)) {
    return createUser(db, data)
      .then(sendWelcomeEmail)
  }
  return Promise.resolve(result)
})

/**
 * create user and return uid
 * @param  {Function} db knex instance
 * @param  {Object} data
 * @return {Promise}
 */
const createUser = (db, data) => {
  const user = factoryUser(data)
  return db('users')
    .insert(user)
    .returning('*')
    .then(head)
}

/**
 * get user on users table
 * @param  {Function} db  knex instance
 * @param  {String} email email from mutation
 * @return {Promise}
 */
const getUserOnUsers = (db, data) => {
  return db('users').where({ email: data.email }).first()
    .then(ifExists)
    .then(createOrReturnObject(db, data))
}

module.exports = getUserOnUsers
