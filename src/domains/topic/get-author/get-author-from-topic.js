module.exports = (db, fields = ['*'], uid) => {
  return db('topics')
    .select(fields)
    .where({ uid })
    .first()
}
