module.exports = (args, { db }, context) => {
  return db('users')
    .where({ is_debater: true })
    .count('*')
    .then(result => {
      const { count } = result[0]
      return count
    })
}
