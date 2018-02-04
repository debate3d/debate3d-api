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
      .returning('id')
  }

  return db('topics_followers')
    .update({ deleted: true })
    .returning('id')
}

module.exports = curry(createRelationship)
