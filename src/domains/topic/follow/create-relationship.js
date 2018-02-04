const { isEmtpy } = require('lodash')
const { curry } = require('ramda')

const createRelationship = (db, data, relationship) => {
  if (isEmtpy(relationship)) {
    return db('topics_followers')
      .insert(data)
      .returning('id')
  }

  // for deletado, marca como não deletado
  if (relationship.deleted) {
    return db('topics_followers')
      .update({ deleted: false })
      .returning('ids')
  }

  return db('topics_followers')
    .update({ deleted: true })
    .returning('ids')
}

module.exports = curry(createRelationship)
