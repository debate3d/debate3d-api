const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const options = {
  auth: {
    api_user: process.env.SENDGRID_USERNAME,
    api_key: process.env.SENDGRID_PASSWORD
  }
}

const client = nodemailer.createTransport(sgTransport(options))

module.exports = client
