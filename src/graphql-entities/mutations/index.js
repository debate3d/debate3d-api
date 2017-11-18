const InsertCard = require('./create-card')
const InsertTopic = require('./create-topic')
const AddReaction = require('./add-reaction')
const AddDeck = require('./add-deck')
const VoteTopic = require('./vote-topic')
const UpdateContent = require('./update-content')
const UpdateUser = require('./update-user')
const UpdateReaction = require('./update-reaction')
const UpdateDeck = require('./update-deck')
const LoginFacebook = require('./login-facebook')
const CreateSubscriber = require('./create-subscriber')
const UpdateUserToSubscriber = require('./update-subscribers')
const MarkUserToVerified = require('./mark-user-to-verified')
const UpdateTopic = require('./update-topic')

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
    UpdateUser,
    LoginFacebook,
    CreateSubscriber,
    UpdateUserToSubscriber,
    UpdateTopic,
    MarkUserToVerified
  }
}

module.exports = mutations
