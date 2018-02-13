const fs = require('fs')

/**
 * generate, in execution time, firebase-admin.json by process.env variables
 * @method generateFirebaseAdminConfig
 */
const generateFirebaseAdminConfig = () => {
  const configObject = {
    type: 'service_account',
    project_id: process.env.FIREBASE_PROJECT,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_URL
  }
  fs.writeFileSync('./config/firebase-admin.json', JSON.stringify(configObject))
}

module.exports = generateFirebaseAdminConfig
