const deleteQuery = (db, database, where) => db(database)
  .where(where)
  .del()
  .then(rows => (rows > 0)
    ? Promise.resolve()
    : Promise.reject('Ocorreu um erro na requisição'))

module.exports = deleteQuery
