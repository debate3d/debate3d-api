const hasAddDeck = require('./has-deck-for-card')

const canAddReaction = (db, uid_user, uid_card) => {
  return hasAddDeck(db, uid_user, uid_card)
    .then(hasDeck => (hasDeck) ? Promise.reject(new Error('O usuário já tem esse card no deck')) : Promise.resolve())
}

module.exports = canAddReaction
