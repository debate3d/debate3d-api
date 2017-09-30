const { prop } = require('ramda')

module.exports = ({ uid }, args, { db }) => {
  return db('cards')
    .select('ponts')
    .where({ uid })
    .first()
    .then(prop('ponts'))
}
