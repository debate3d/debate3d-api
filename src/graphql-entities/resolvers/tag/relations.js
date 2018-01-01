const topics = (tag, args, { db }) => {
  return db('tags_to_topic')
    .select('topics.*')
    .innerJoin('topics', 'topics.uid', 'tags_to_topic.uid_topic')
    .where('is_private', false)
    .where('uid_tag', tag.uid)
}

module.exports = {
  topics
}
