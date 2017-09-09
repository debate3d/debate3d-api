const hasDeckFromCard = require('./has-deck-for-card')

const canUpdateDeck = (db, uid_user, uid_card) => {
  return hasDeckFromCard(db, uid_user, uid_card)
    .then(hasReaction => (hasReaction)
      ? Promise.resolve()
      : Promise.reject(new Error('O usuário ainda não colocou este card no deck')))
}

module.exports = canUpdateDeck
