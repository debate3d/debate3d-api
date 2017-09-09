const { deleteQuery } = require('../../../helpers/database')

const { decrementUser } = require('../../user')

const decrementCard = require('../decrement-card')

const {
  USER,
  CARD
} = require('../../../../config/pontuation')

const acceptOrder = (data, db, uidAuthorCard) => {
  const increments = []
  const uidCard = data.uid_card

  increments.push(decrementUser(db, uidAuthorCard, USER.RECEIVE_DECK))
  increments.push(decrementCard(db, uidCard, CARD.RECEIVE_DECK))

  const { id } = data

  return Promise.all(increments).then(_ => deleteQuery(db, 'decks_store', { id }))
}

module.exports = acceptOrder
