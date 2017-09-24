module.exports = (topic, args, { db, dataLoader }) => {
  return db('tags_to_topic')
    .where('uid_topic', topic.uid)
    .then(rows => {
      const tags = rows.map(row => dataLoader.tag.load(row.uid_tag))
      return Promise.all(tags)
    })
}
