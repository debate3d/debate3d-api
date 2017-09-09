const { returnFields } = require('../../../helpers/common')

const { incrementUser, updateModerator } = require('../../user')

const factoryTopic = require('./factory')

const { USER } = require('../../../../config/pontuation')

const insertTopic = require('./insert-topic')

const createTopic = (data, db) => {
  const topic = factoryTopic(data)
  const fields = returnFields([], topic)
  return incrementUser(db, data.uid_author, USER.CREATE_TOPIC)
    .then(() => updateModerator(db, data.uid_author))
    .then(() => insertTopic(db, fields, topic))
    .catch(err => {
      console.error(err)
      return Promise.reject(new Error('Não foi possível criar o tópico'))
    })
}

module.exports = createTopic
