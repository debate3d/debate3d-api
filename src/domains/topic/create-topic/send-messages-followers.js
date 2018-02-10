const { curry } = require('ramda')
const sendMessage = require('../../firebase/messaging/utils/send-message.js')
const { flatten, uniq } = require('lodash')

const sendMessagesToFollowers = (db, topic, tokens) => {
  return db('users')
    .select('name')
    .where('uid', topic.uid_author)
    .first()
    .then(author => {
      const payload = {
        notification: {
          title: `Confira o novo tema de ${author.name}`,
          clickAction: `${process.env.APPLICATION_URL}/topic/${topic.nickname}/detail`
        }
      }
      const options = {
        priority: 'high',
        timeToLive: 60 * 60
      }

      return sendMessage(uniq(flatten(tokens)), payload, options)
    })
}

module.exports = curry(sendMessagesToFollowers)
