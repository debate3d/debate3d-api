const { selectWhere } = require('../../../helpers/database')

module.exports = (db, fields = ['*'], uid) => {
  return selectWhere(db('cards'), fields, { uid }).first()
}
