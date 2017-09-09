const { getUidAuthorFromTopic } = require('../get-author')
const { isAuthor } = require('../../../helpers/database')
const canAddVote = require('./can-add-vote')
const acceptOrder = require('./accept-order')

const reject = err => {
  console.error(err)
  return Promise.reject(new Error(err))
}

const createVote = (data, db) => {
  const msgError = 'Você não pode votar no próprio tópico'
  return canAddVote(db, data.uid_user, data.uid_topic)
    .then(_ => isAuthor(db, 'topics', data.uid_user, data.uid_topic, msgError))
    .then(_ => getUidAuthorFromTopic(db, data.uid_topic))
    .then(uidAuthorFromTopic => acceptOrder(data, db, uidAuthorFromTopic))
    .catch(reject)
}

module.exports = createVote
