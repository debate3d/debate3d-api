const { head } = require('lodash')
const {
  manipulateTokenDevice,
  loadTokenDevicesByUser
} = require('./support/helpers')

/**
 * @method performUpdate
 * @param  {KnexInstance} db
 * @param  {Object}       data
 * @return {Promise}
 */
const performUpdate = async (db, data) => {
  const { token_device, uid } = data

  const users = await loadTokenDevicesByUser(db, [uid])
  const token_devices = head(users)

  const tokenDevices = manipulateTokenDevice(token_device, token_devices)

  return db('users')
    .update({ token_devices: tokenDevices })
    .where('uid', data.uid)
    .returning('uid')
}

module.exports = performUpdate
