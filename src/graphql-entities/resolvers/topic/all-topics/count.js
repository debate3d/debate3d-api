const { head } = require('ramda')

module.exports = (root, { db }, context) => {
  return db('topics').count().then(head).then(({ count }) => count)
}
