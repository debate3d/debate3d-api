const { head } = require('ramda')

module.exports = (parent, args, { db }) => {
  const { root } = parent
  return db('cards')
    .where(root.key, root.uid)
    .count('*')
    .then(head)
    .then(({ count }) => count)
}
