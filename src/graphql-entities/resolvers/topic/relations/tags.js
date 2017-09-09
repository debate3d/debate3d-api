module.exports = (topic, args, { db }) => {
  return db('tags_to_topic')
    .where('uid_topic', topic.uid)
    .then(rows => {
      const tags = rows.map(row => {
        return db('tags').where({ uid: row.uid_tag }).first()
      })
      return Promise.all(tags)
    })
}
