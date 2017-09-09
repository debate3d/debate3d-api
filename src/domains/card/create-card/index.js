const { getUidAuthorFromTopic } = require('../../topic/get-author')
const canCreateCard = require('./can-create-card')
const acceptOrder = require('./accept-order')

const reject = err => {
  console.error(err)
  return Promise.reject(new Error(err))
}

const createCard = (data, db) => {
  return canCreateCard(db, data.uid_author, data.uid_topic)
    .then(_ => getUidAuthorFromTopic(db, data.uid_topic))
    .then(uidAuthorFromTopic => acceptOrder(data, db, uidAuthorFromTopic))
    .catch(reject)
}

module.exports = createCard
