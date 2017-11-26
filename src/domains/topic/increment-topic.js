module.exports = (db, uid, ponts) => {
  const condition = { uid }

  return db('topics')
    .increment('ponts', ponts)
    .where(condition)
}
