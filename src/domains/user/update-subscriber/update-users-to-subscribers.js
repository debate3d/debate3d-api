const { prop } = require('ramda')

module.exports = (db, users, subscriber) => {
  const uuids = users.map(prop('uid'))
  console.log(uuids)
  return db('users')
    .update({ subscriber })
    .whereIn('uid', uuids)
    .returning('uid')
}
