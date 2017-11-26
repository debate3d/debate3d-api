module.exports = (db, uid, ponts) => {
  const condition = { uid }

  return db('users')
    .increment('ponts', ponts)
    .where(condition)
}
