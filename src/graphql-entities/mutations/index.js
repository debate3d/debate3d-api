const InsertCard = require('./create-card')
const InsertTopic = require('./create-topic')
const AddReaction = require('./add-reaction')
const AddDeck = require('./add-deck')
const VoteTopic = require('./vote-topic')
const UpdateContent = require('./update-content')
const UpdateUser = require('./update-user')
const UpdateReaction = require('./update-reaction')
const UpdateDeck = require('./update-deck')

const mutations = {
  RootMutation: {
    InsertCard,
    InsertTopic,
    AddReaction,
    VoteTopic,
    AddDeck,
    UpdateContent,
    UpdateReaction,
    UpdateDeck,
    UpdateUser
  }
}

module.exports = mutations
