const { getUidAuthorFromTopic } = require('../get-author')
const canAddVote = require('./can-add-vote')
const acceptOrder = require('./accept-order')

const { graphqlErrorHandler } = require('../../../helpers/bugnag')

const createVote = (data, db) => {
  return canAddVote(db, data.uid_user, data.uid_topic)
    .then(_ => getUidAuthorFromTopic(db, data.uid_topic))
    .then(uidAuthorFromTopic => acceptOrder(data, db, uidAuthorFromTopic))
    .catch(graphqlErrorHandler)
}

module.exports = createVote
