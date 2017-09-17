const { merge } = require('lodash')

module.exports = (root, args, context) => {
  return {
    args,
    root: merge(root, { key: 'uid_topic' })
  }
}
