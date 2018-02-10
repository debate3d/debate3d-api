const { getUidAuthorFromTopic } = require('../../topic/get-author')
const canCreateCard = require('./can-create-card')
const acceptOrder = require('./accept-order')

const { graphqlErrorHandler } = require('../../../helpers/bugnag')

const createCard = (data, db) => {
  return db.transaction(trx => {
    return canCreateCard(trx, data.uid_author, data.uid_topic)
      .then(_ => getUidAuthorFromTopic(trx, data.uid_topic))
      .then(uidAuthorFromTopic => acceptOrder(data, trx, uidAuthorFromTopic))
      .then(trx.commit)
      .catch(trx.rollback)
      .catch(graphqlErrorHandler)
  })
}

module.exports = createCard
