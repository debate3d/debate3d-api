const bucket = require('../storage')
const bucketName = `${process.env.FIREBASE_PROJECT_ID}.appspot.com`

const getPublicUrl = (filename, classe) => {
  return `https://storage.googleapis.com/${bucketName}/${classe}/${filename}`
}

const uploadFile = (file, userUid, classe) => {
  return new Promise((resolve, reject) => {
    const gcname = `${file.originalname}-${userUid}`
    const fileToUpload = bucket.file(gcname)

    const stream = fileToUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype
      }
    })

    stream.on('error', err => {
      console.error(err)
      reject(new Error('An error ocurred'))
    })

    stream.on('finish', () => {
      resolve({ url: getPublicUrl(gcname, classe) })
    })

    stream.end(file)
  })
}

module.exports = uploadFile
