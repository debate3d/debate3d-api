module.exports = (db, uid) => {
  return db('users')
    .update({ is_debater: true })
    .where({ uid })
}
