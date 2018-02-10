const { curry } = require('ramda')
const sendMessage = require('../../firebase/messaging/utils/send-message.js')
const { flatten } = require('lodash')

const sendMessagesToFollowers = (db, topic, tokens) => {
  return db('users')
    .select('name')
    .where('uid', topic.uid_author)
    .first()
    .then(author => {
      const payload = {
        notification: {
          title: `Confira o novo tema de ${author.name}`,
          clickAction: `http://localhost:8080/#/topic/${topic.nickname}/detail`
        }
      }
      console.log(payload)
      console.log(flatten(tokens))

      return sendMessage(flatten(tokens), payload)
    })
}

module.exports = curry(sendMessagesToFollowers)
