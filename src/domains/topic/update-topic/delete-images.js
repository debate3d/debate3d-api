const { last, tail, reverse, includes } = require('lodash')
const cloudinary = require('cloudinary')
const configCloudinary = require('../../../../config/cloudnary')
cloudinary.config(configCloudinary)

const getInfos = (error, result) => {
  console.error(error)
}

const getExtension = imageName => {
  if (includes(imageName, '.png')) return '.png'
  if (includes(imageName, '.jpeg')) return '.jpeg'
  if (includes(imageName, '.jpg')) return '.jpg'
  return ''
}

const getPublicId = url_image => {
  const imageName = last(url_image.split('/'))
  const extension = getExtension(imageName)
  return reverse(tail(reverse(imageName.split(extension)))).join('')
}

module.exports = url_image => {
  const publicId = getPublicId(url_image)
  console.log(publicId)
  return cloudinary.v2.uploader.destroy(publicId, getInfos)
}
