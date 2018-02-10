const UpdateDeck = require('./update-deck')
const InsertCard = require('./create-card')
const AddReaction = require('./add-reaction')
const UpdateReaction = require('./update-reaction')
const UpdateContent = require('./update-content')
const AddDeck = require('./add-deck')

module.exports = {
  RootMutation: {
    AddDeck,
    UpdateDeck,
    InsertCard,
    AddReaction,
    UpdateContent,
    UpdateReaction
  }
}
