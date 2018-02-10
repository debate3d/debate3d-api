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
}

module.exports = loadTokenDevicesByUser
