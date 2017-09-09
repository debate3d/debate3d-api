const { head } = require('lodash')

const insertQuery = (db, database, fields, obj) => db(database).returning(fields).insert(obj).then(head)

module.exports = insertQuery
