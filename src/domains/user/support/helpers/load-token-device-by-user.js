const { curry } = require('ramda')
const { map } = require('lodash')

/**
 * @method loadTokenDevicesByUser
 * @param  {KnexInstance}  db
 * @param  {Array<String>} uuids
 * @return {Promise<Array>}
 */
const loadTokenDevicesByUser = (db, uuids) => {
  return db('users')
    .select('token_devices')
    .whereIn('uid', uuids)
    .then(rows => map(rows, 'token_devices'))
}

module.exports = curry(loadTokenDevicesByUser)
