const { getUidAuthorFromCard } = require('../get-author')
const { isAuthor } = require('../../../helpers/database')
const canUpdateReaction = require('./can-update-reaction')
const acceptOrder = require('./accept-order')

const { graphqlErrorHandler } = require('../../../helpers/bugnag')

const createUser = (data, db) => {
  const msgError = 'Você não pode reagir ao próprio card'
  return canUpdateReaction(db, data.uid_user, data.uid_card)
    .then(_ => isAuthor(db, 'cards', data.uid_user, data.uid_card, msgError))
    .then(_ => getUidAuthorFromCard(db, data.uid_card))
    .then(uidAuthorFromCard => acceptOrder(data, db, uidAuthorFromCard))
    .catch(graphqlErrorHandler)
}

module.exports = createUser
