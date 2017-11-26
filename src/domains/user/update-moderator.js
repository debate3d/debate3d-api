module.exports = (db, uid) => {
  return db('users')
    .update({ is_moderator: true })
    .where({ uid })
}
