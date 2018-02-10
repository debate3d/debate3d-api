const InsertTopic = require('./create-topic')
const VoteTopic = require('./vote-topic')
const UpdateTopic = require('./update-topic')
const FollowTopic = require('./follow')

module.exports = {
  RootMutation: {
    VoteTopic,
    InsertTopic,
    UpdateTopic,
    FollowTopic
  }
}
