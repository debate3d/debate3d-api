const positions = (root, args, { db }) => db('position')
const position = (root, { id }, { db }) => db('position').where({ id }).first()

module.exports = {
  positions,
  position
}
