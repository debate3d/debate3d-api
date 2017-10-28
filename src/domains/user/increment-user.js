const { increment } = require('../../helpers/database')

module.exports = (db, uid, ponts) => {
  return increment(db('users'), 'ponts', { uid }, ponts)
}
