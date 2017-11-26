module.exports = (db, fields = ['*'], uid) => {
  return db('cards')
    .select(fields)
    .where({ uid })
    .first()
}
