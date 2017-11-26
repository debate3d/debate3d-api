module.exports = (db, uid, ponts) => {
  const condition = { uid }

  return db('cards')
    .decrement('ponts', ponts)
    .where(condition)
}
