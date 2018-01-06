const { merge, isEmpty } = require('lodash')

module.exports = (root, args, context) => {
  if (isEmpty(root)) return {}

  return {
    args,
    root: merge(root, { key: 'uid_author', not_private_topics: false })
  }
}
