const InsertTopic = require('./create-topic')
const VoteTopic = require('./vote-topic')
const UpdateTopic = require('./update-topic')

module.exports = {
  RootMutation: {
    VoteTopic,
    InsertTopic,
    UpdateTopic
  }
}
