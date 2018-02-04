const hasFollow = (db, data) => {
  return db('topics_followers')
    .where(data)
    .first()
}

module.exports = hasFollow
