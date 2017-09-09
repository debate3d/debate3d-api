const card = (root, { uid }, { db }) => db('cards').where({ uid }).first()

module.exports = {
  card
}
