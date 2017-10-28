const { decrement } = require('../../helpers/database')

module.exports = (db, uid, ponts) => {
  return decrement(db('users'), 'ponts', { uid }, ponts)
}
