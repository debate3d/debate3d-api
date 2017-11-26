const { head } = require('lodash')

const { returnFields } = require('../../../helpers/common')
const { incrementUser } = require('../../user')
const incrementCard = require('../increment-card')
const {
  USER,
  CARD
} = require('../../../../config/pontuation')

const acceptOrder = (data, db, uidAuthorCard) => {
  const fields = returnFields(['id'], data)
  const uidCard = data.uid_card
  const increments = []

  // Increment ponts to user
  increments.push(incrementUser(db, data.uid_user, USER.STORE_CARD))
  increments.push(incrementUser(db, uidAuthorCard, USER.RECEIVE_DECK))
  increments.push(incrementCard(db, uidCard, CARD.RECEIVE_DECK))

  return Promise
    .all(increments)
    .then(_ => {
      return db('decks_store')
        .insert(data)
        .returning(fields)
        .then(head)
    })
}

module.exports = acceptOrder
