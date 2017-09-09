const { head } = require('lodash')

const insertQuery = (db, database, fields, where, obj) => db(database).returning(fields).update(obj).where(where).then(head)

module.exports = insertQuery
