const { decrement } = require('../../helpers/database')

module.exports = (db, uid, ponts) => {
  const condition = { uid }

  return decrement(db('cards'), 'ponts', condition, ponts)
}
