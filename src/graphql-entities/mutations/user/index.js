const UpdateUser = require('./update-user')
const LoginFacebook = require('./login-facebook')
const CreateSubscriber = require('./create-subscriber')
const MarkUserToVerified = require('./mark-user-to-verified')
const UpdateUserTokenDevice = require('./update-user-token-device')
const UpdateUserToSubscriber = require('./update-subscribers')
const FollowModerator = require('./follow')

module.exports = {
  RootMutation: {
    UpdateUser,
    LoginFacebook,
    FollowModerator,
    CreateSubscriber,
    MarkUserToVerified,
    UpdateUserTokenDevice,
    UpdateUserToSubscriber
  }
}
