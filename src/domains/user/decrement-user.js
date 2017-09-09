const { decrement } = require('../../helpers/database')

module.exports = (db, uid, ponts) => {
  const condition = { uid }

  return decrement(db('users'), 'ponts', condition, ponts)
}
