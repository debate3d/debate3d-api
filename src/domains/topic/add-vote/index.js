const { getUidAuthorFromTopic } = require('../get-author')
const canAddVote = require('./can-add-vote')
const acceptOrder = require('./accept-order')

const reject = err => {
  console.error(err)
  return Promise.reject(new Error(err))
}

const createVote = (data, db) => {
  return canAddVote(db, data.uid_user, data.uid_topic)
    .then(_ => getUidAuthorFromTopic(db, data.uid_topic))
    .then(uidAuthorFromTopic => acceptOrder(data, db, uidAuthorFromTopic))
    .catch(reject)
}

module.exports = createVote
