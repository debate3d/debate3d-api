const me = (root, args, { $loadUser, db }) => {
  return $loadUser(({ uid }) => {
    return db('users').where({ uid }).first()
  })
}

module.exports = me
