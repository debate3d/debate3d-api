const { insertQuery } = require('../../../helpers/database')

const { returnFields } = require('../../../helpers/common')

const { incrementUser, decrementUser } = require('../../user')

const incrementTopic = require('../increment-topic')

const {
  USER,
  TOPIC
} = require('../../../../config/pontuation')

const acceptOrder = (data, db, uidAuthorCard) => {
  const fields = returnFields(['id'], data)
  const increments = []

  // Increment ponts to user
  increments.push(incrementUser(db, data.uid_user, USER.VOTE_CARD))
  increments.push(incrementTopic(db, data.uid_topic, TOPIC.RECEIVE_VOTE))

  if (data.reaction) {
    increments.push(incrementUser(db, uidAuthorCard, USER.RECEIVE_LIKE))
  } else {
    increments.push(decrementUser(db, uidAuthorCard, USER.RECEIVE_DISLIKE))
  }
  return Promise.all(increments).then(_ => insertQuery(db, 'votes_topic', fields, data))
}

module.exports = acceptOrder
