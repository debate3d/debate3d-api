const { head } = require('ramda')

const count = (parent, args, { db }) => {
  const { root } = parent
  return db('topics')
    .where('uid_author', root.uid)
    .count('*')
    .then(head)
    .then(({ count }) => count)
}

const records = (parent, _args, { db }) => {
  const { root, args } = parent
  const { page } = args
  const offset = (page - 1) * 10
  return db('topics')
    .orderBy('ponts', 'desc')
    .where('uid_author', root.uid)
    .limit(10)
    .offset(offset)
}

module.exports = {
  count,
  records
}
