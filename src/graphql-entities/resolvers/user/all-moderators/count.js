module.exports = (args, { db }, context) => {
  return db('users')
    .where({ is_moderator: true })
    .count('*')
    .then(result => {
      const { count } = result[0]
      return count
    })
}
