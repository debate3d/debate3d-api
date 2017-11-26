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
  const increments = []
  const uidCard = data.uid_card

  if (data.reaction) {
    increments.push(incrementUser(db, uidAuthorCard, USER.RECEIVE_LIKE + USER.RECEIVE_DISLIKE))
    increments.push(incrementCard(db, uidCard, CARD.RECEIVE_LIKE + CARD.RECEIVE_DISLIKE))
  } else {
    increments.push(incrementUser(db, uidAuthorCard, USER.RECEIVE_DISLIKE - USER.RECEIVE_LIKE))
    increments.push(incrementCard(db, uidCard, CARD.RECEIVE_DISLIKE + CARD.RECEIVE_LIKE))
  }

  const { id } = data

  return Promise
    .all(increments)
    .then(_ => {
      return db('reactions_users')
        .update(data)
        .where({ id })
        .returning(fields)
        .then(head)
    })
}

module.exports = acceptOrder
