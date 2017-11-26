module.exports = (db, uid, ponts) => {
  const condition = { uid }

  return db('cards')
    .increment('ponts', ponts)
    .where(condition)
}
