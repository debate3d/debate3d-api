const { insertQuery } = require('../../../helpers/database')

const { returnFields } = require('../../../helpers/common')

const { incrementUser, decrementUser } = require('../../user')

const incrementCard = require('../increment-card')

const decrementCard = require('../decrement-card')

const {
  USER,
  CARD
} = require('../../../../config/pontuation')

const acceptOrder = (data, db, uidAuthorCard) => {
  const fields = returnFields(['id'], data)
  const increments = []

  // Increment ponts to user
  increments.push(incrementUser(db, data.uid_user, USER.VOTE_CARD))

  if (data.reaction) {
    increments.push(incrementUser(db, uidAuthorCard, USER.RECEIVE_LIKE))
    increments.push(incrementCard(db, uidAuthorCard, CARD.RECEIVE_LIKE))
  } else {
    increments.push(decrementUser(db, uidAuthorCard, USER.RECEIVE_DISLIKE))
    increments.push(decrementCard(db, uidAuthorCard, CARD.RECEIVE_DISLIKE))
  }
 return Promise.all(increments).then(_ => insertQuery(db, 'reactions_users', fields, data))
}

module.exports = acceptOrder
