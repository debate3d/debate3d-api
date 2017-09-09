const factoryCard = require('./factory')

const { insertQuery } = require('../../../helpers/database')

const { returnFields } = require('../../../helpers/common')

const { incrementUser, updateDebater } = require('../../user')

const incrementTopic = require('../../topic/increment-topic')

const {
  USER,
  TOPIC
} = require('../../../../config/pontuation')

const acceptOrder = (data, db, uid_author) => {
  const card = factoryCard(data)

  const fields = returnFields([], card)

  const increments = []

  increments.push(updateDebater(db, data.uid_author))
  increments.push(incrementUser(db, uid_author, USER.RECEIVE_CARD_THEME))
  increments.push(incrementUser(db, data.uid_author, USER.CREATE_CARD))
  increments.push(incrementTopic(db, data.uid_topic, TOPIC.RECEIVE_CARD))

  return Promise.all(increments).then(_ => insertQuery(db, 'cards', fields, card))
}

module.exports = acceptOrder
