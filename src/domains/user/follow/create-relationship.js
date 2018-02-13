const { isEmpty } = require('lodash')
const { curry } = require('ramda')

const createRelationship = (db, data, relationship) => {
  if (isEmpty(relationship)) {
    return db('moderators_followers')
      .insert(data)
      .returning('id')
  }

  if (relationship.deleted) {
    return db('moderators_followers')
      .update({ deleted: false })
      .where('uid_user', data.uid_user)
      .where('uid_moderator', data.uid_moderator)
      .returning('id')
  }

  return db('moderators_followers')
    .update({ deleted: true })
    .where('uid_user', data.uid_user)
    .where('uid_moderator', data.uid_moderator)
    .returning('id')
}

module.exports = curry(createRelationship)
