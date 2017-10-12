const { curry } = require('ramda')

const updateUsersToSubscriber = require('./update-users-to-subscribers')

/**
 * update subscribers
 * @param  {Object} data
 * @param  {Object} user
 * @return {Promise}
 */
module.exports = curry((data, db, user) => {
  const { users, subscriber } = data

  return updateUsersToSubscriber(db, users, subscriber)
})
