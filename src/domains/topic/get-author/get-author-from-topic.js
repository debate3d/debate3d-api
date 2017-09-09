const { selectWhere } = require('../../../helpers/database')

module.exports = (db, fields = ['*'], uid) => {
  return selectWhere(db('topics'), fields, { uid }).first()
}
