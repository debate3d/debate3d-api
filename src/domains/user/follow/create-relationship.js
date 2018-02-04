const { isEmtpy } = require('lodash')
const { curry } = require('ramda')

const createRelationship = (db, data, relationship) => {
  if (isEmtpy(relationship)) {
    return db('moderators_followers')
      .insert(data)
      .returning('id')
  }

  if (relationship.deleted) {
    return db('moderators_followers')
      .update({ deleted: false })
      .returning('ids')
  }

  return db('moderators_followers')
    .update({ deleted: true })
    .returning('ids')
}

module.exports = curry(createRelationship)
