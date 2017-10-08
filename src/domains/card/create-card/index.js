const { getUidAuthorFromTopic } = require('../../topic/get-author')
const canCreateCard = require('./can-create-card')
const acceptOrder = require('./accept-order')

const { graphqlErrorHandler } = require('../../../helpers/bugnag')

const createCard = (data, db) => {
  return canCreateCard(db, data.uid_author, data.uid_topic)
    .then(_ => getUidAuthorFromTopic(db, data.uid_topic))
    .then(uidAuthorFromTopic => acceptOrder(data, db, uidAuthorFromTopic))
    .catch(graphqlErrorHandler)
}

module.exports = createCard
