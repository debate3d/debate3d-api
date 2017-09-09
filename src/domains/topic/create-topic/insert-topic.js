const { head } = require('lodash')

const insertTopic = (db, fields, topic) => {
  return db('topics')
    .returning(fields)
    .insert(topic)
    .then(head)
}

module.exports = insertTopic
