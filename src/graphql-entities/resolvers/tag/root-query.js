const tag = (root, { uid }, { db }) => db('tags').where({ uid }).first()

const tagSearch = (root, { label }, { db }) => {
  return db('tags').where('label', 'like', `%${label}%`)
}

module.exports = {
  tag,
  tagSearch
}
