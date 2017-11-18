module.exports = (uidTopic, user, db) => {
  return db('topics')
    .select(['uid_author', 'url_image'])
    .where('uid', uidTopic)
    .first()
    .then(topic => {
      const { uid_author } = topic
      return uid_author === user.uid
        ? topic
        : Promise.reject(new Error('Not the same author topic'))
    })
}
