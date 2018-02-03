const admin = require('firebase-admin')
const config = require('../../../config/firebase-admin.json')

module.exports = admin.initializeApp({ credential: admin.credential.cert(config) })
