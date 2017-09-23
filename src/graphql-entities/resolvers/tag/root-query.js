const tag = (root, { uid }, { dataLoader }) => dataLoader.tag.load(uid)

const tagSearch = (root, { label }, { db }) => {
  return db('tags').where('label', 'like', `%${label}%`)
}

module.exports = {
  tag,
  tagSearch
}
