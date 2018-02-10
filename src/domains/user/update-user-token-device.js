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

  const user = await loadTokenDevicesByUser(db, [uid]).first()

  const tokenDevices = manipulateTokenDevice(token_device, user.token_devices)

  return db('users')
    .update({ token_devices: tokenDevices })
    .where('uid', data.uid)
    .returning('uid')
}

module.exports = performUpdate
