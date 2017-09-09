const topics = (tag, args, { db }) => {
  return db('tags_to_topic')
    .where('uid_tag', tag.uid)
    .then(rows => {
      const topics = rows.map(row => {
        return db('topics').where({ uid: row.uid_topic }).first()
      })
      return Promise.all(topics)
    })
}

module.exports = {
  topics
}
