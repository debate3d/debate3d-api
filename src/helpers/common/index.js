const loadGraphQLFiles = require('./load-graphql-files')
const returnDateToDb = require('./return-date-to-db')
const returnFields = require('./return-fields')
const sanitize = require('./sanitize')
const getString = require('./get-string')
const getStringDashed = require('./get-string-dashed')

module.exports = {
  getString,
  getStringDashed,
  loadGraphQLFiles,
  returnDateToDb,
  returnFields,
  sanitize
}
