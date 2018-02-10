const hasFollow = (db, data) => {
  return db('moderators_followers')
    .where(data)
    .first()
}

module.exports = hasFollow
