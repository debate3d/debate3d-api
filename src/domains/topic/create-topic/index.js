const { omit } = require('lodash')

const { returnFields } = require('../../../helpers/common')
const { incrementUser, updateModerator } = require('../../user')
const deleteImage = require('../update-topic/delete-images')
const { getModeratorFollowers, loadTokenDevicesByUser } = require('../../user/support/helpers')
const { USER } = require('../../../../config/pontuation')
const { graphqlErrorHandler } = require('../../../helpers/bugnag')

const relationWithTags = require('./relation-with-tags')
const checkNicknameIfExists = require('./check-nickname-if-exists')
const factoryTopic = require('./factory')
const insertTopic = require('./insert-topic')
const sendMessagesToFollowers = require('./send-messages-followers')

const createTopic = (data, db) => {
  const tags = data.tag
  const dataToInsert = omit(data, 'tag')
  const topic = factoryTopic(dataToInsert)
  const fields = returnFields([], topic)
  return db.transaction(trx => {
    return checkNicknameIfExists(trx, topic.nickname)
      .then(() => incrementUser(trx, data.uid_author, USER.CREATE_TOPIC))
      .then(() => updateModerator(trx, data.uid_author))
      .then(() => insertTopic(trx, fields, topic))
      .then(relationWithTags(trx, tags))
      .then(() => getModeratorFollowers(trx, data.uid_author))
      .then(loadTokenDevicesByUser(trx))
      .then(sendMessagesToFollowers(trx, topic))
      .then(trx.commit)
      .catch(trx.rollback)
      .catch(err => {
        deleteImage(data.url_image)

        return graphqlErrorHandler(err)
      })
  })
}

module.exports = createTopic
