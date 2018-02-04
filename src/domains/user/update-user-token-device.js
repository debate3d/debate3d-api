/**
 * @method performUpdate
 * @param  {KnexInstance} db
 * @param  {Object}       data
 * @return {Promise}
 */
const performUpdate = (db, data) => {
  const { token_device } = data

  return db('users')
    .update({ token_device })
    .where('uid', data.uid)
    .returning('uid')
}

module.exports = performUpdate
