const { getUidAuthorFromCard } = require('../get-author')
const { isAuthor } = require('../../../helpers/database')
const canAddDeck = require('./can-add-deck')
const acceptOrder = require('./accept-order')

const reject = err => {
  console.error(err)
  return Promise.reject(new Error(err))
}

const createUser = (data, db) => {
  const msgError = 'Você não pode inserir o card no seu deck'
  return canAddDeck(db, data.uid_user, data.uid_card)
    .then(_ => isAuthor(db, 'cards', data.uid_user, data.uid_card, msgError))
    .then(_ => getUidAuthorFromCard(db, data.uid_card))
    .then(uidAuthorFromCard => acceptOrder(data, db, uidAuthorFromCard))
    .catch(reject)
}

module.exports = createUser
