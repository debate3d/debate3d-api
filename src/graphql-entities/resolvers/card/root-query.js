const card = (root, { uid }, { dataLoader }) => dataLoader.cards.load(uid)

module.exports = {
  card
}
