module.exports = (user, args, context) => {
  return context
    .db('votes_topic')
    .where('uid_user', user.uid)
}
