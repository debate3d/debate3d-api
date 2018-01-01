const { head, prop } = require('ramda')

module.exports = (root, { db }, context) => {
  return db('topics')
    .where('is_private', false)
    .count()
    .then(head)
    .then(prop('count'))
}
