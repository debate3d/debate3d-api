const LoginFacebook = require('./login-facebook')
const CreateSubscriber = require('./create-subscriber')
const MarkUserToVerified = require('./mark-user-to-verified')
const UpdateUserToSubscriber = require('./update-subscribers')
const UpdateUser = require('./update-user')

module.exports = {
  RootMutation: {
    UpdateUser,
    LoginFacebook,
    CreateSubscriber,
    MarkUserToVerified,
    UpdateUserToSubscriber
  }
}
