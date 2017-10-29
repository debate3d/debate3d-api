const fs = require('fs')
const firebaseKeys = require('../../../config/firebase-admin')
const projectId = process.env.FIREBASE_PROJECT_ID
const bucketName = `${projectId}.appspot.com`
const gcs = require('@google-cloud/storage')

fs.writeFileSync('config/key.json', JSON.stringify(firebaseKeys))
const keys = require('../../../config/key.json')

const config = {
  projectId,
  keys
}

const bucket = gcs(config)

// @TODO: resolve problem
module.exports = bucket(bucketName)
