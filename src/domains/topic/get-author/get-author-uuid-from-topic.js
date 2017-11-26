const { path } = require('ramda')
const getAuthorFromTopic = require('./get-author-from-topic')

module.exports = (db, uid_topic) => {
  return getAuthorFromTopic(db, ['uid_author'], uid_topic)
    .then(path(['uid_author']))
}
