module.exports = (db, uid, ponts) => {
  const condition = { uid }

  return db('users')
    .decrement('ponts', ponts)
    .where(condition)
}
