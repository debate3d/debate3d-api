const { getUidAuthorFromCard } = require('../get-author')
const { isAuthor } = require('../../../helpers/database')
const canAddReaction = require('./can-add-reaction')
const acceptOrder = require('./accept-order')

const reject = err => {
  console.error(err)
  return Promise.reject(new Error(err))
}

const createUser = (data, db) => {
  const msgError = 'Você não pode reagir ao próprio card'
  return canAddReaction(db, data.uid_user, data.uid_card)
    .then(_ => isAuthor(db, 'cards', data.uid_user, data.uid_card, msgError))
    .then(_ => getUidAuthorFromCard(db, data.uid_card))
    .then(uidAuthorFromCard => acceptOrder(data, db, uidAuthorFromCard))
    .catch(reject)
}

module.exports = createUser
