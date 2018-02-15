const sendgridClient = require('../../sendgrid/client')

/**
 * @method sendEmail
 * @param  {Object} user
 * @return {Promise}
 */
const sendEmail = object => {
  const email = {
    from: 'debated3d@gmail.com',
    to: object.email,
    subject: 'Recuperação de senha: Debate3D',
    html: `
    <p>
      Ei, recupere sua senha no endereço ${process.env.APPLICATION_URL}password-reset?token=${object.token}.
    </p>
    <br />
    <p> Lembre-se, esse link tem data de expiração de 1 hora. </p>`
  }

  return sendgridClient.sendMail(email)
}

module.exports = sendEmail
