const { isEmpty } = require('lodash')
const { curry } = require('ramda')

const createRelationship = (db, data, relationship) => {
  if (isEmpty(relationship)) {
    return db('topics_followers')
      .insert(data)
      .returning('id')
  }

  // for deletado, marca como não deletado
  if (relationship.deleted) {
    return db('topics_followers')
      .update({ deleted: false })
      .where('uid_topic', data.uid_topic)
      .where('uid_user', data.uid_user)
      .returning('id')
  }

  return db('topics_followers')
    .update({ deleted: true })
    .where('uid_topic', data.uid_topic)
    .where('uid_user', data.uid_user)
    .returning('id')
}

module.exports = curry(createRelationship)
