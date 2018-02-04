const UpdateUser = require('./update-user')
const LoginFacebook = require('./login-facebook')
const CreateSubscriber = require('./create-subscriber')
const MarkUserToVerified = require('./mark-user-to-verified')
const UpdateUserTokenDevice = require('./update-user-token-device')
const UpdateUserToSubscriber = require('./update-subscribers')

module.exports = {
  RootMutation: {
    UpdateUser,
    LoginFacebook,
    CreateSubscriber,
    MarkUserToVerified,
    UpdateUserTokenDevice,
    UpdateUserToSubscriber
  }
}
