const positions = (root, args, { db }) => db('position')
const position = (root, { id }, { dataLoader }) => dataLoader.position.load(id)

module.exports = {
  positions,
  position
}
