const { curry } = require('ramda')
const sendMessage = require('../../firebase/messaging/utils/send-message.js')
const { flatten, uniq } = require('lodash')

const sendMessagesToFollowers = (db, card, tokens) => {
  return db('topics')
    .select(['title', 'nickname'])
    .where('uid', card.uid_topic)
    .first()
    .then(topic => {
      const payload = {
        notification: {
          title: `Confira uma nova opinião no tema ${topic.title}`,
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
