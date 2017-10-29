const { uploadFile } = require('../../firebase')

module.exports = (file, user) => {
  return uploadFile(file, user.uid)
    .then(({ url }) => {
      console.log(url)
      return url
    })
}
