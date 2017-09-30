const { prop } = require('ramda')

module.exports = ({ uid }, args, { db }) => {
  return db('topics')
    .select('ponts')
    .where({ uid })
    .first()
    .then(prop('ponts'))
}
