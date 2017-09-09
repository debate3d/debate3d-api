module.exports = (root, { db }, context) => {
  return db('users')
    .count('*')
    .then(result => {
      const { count } = result[0]
      return count
    })
}
