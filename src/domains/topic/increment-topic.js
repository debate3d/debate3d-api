const { increment } = require('../../helpers/database')

module.exports = (db, uid, ponts) => {
  const condition = { uid }

  return increment(db('topics'), 'ponts', condition, ponts)
}
