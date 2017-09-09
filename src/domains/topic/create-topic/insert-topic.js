const { head } = require('lodash')

const insertTopic = (db, fields, topic) => db('topics').returning(fields).insert(topic).then(head)

module.exports = insertTopic
