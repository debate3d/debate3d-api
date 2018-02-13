const sendgridClient = require('../../../sendgrid/client')

/**
 * @method sendWelcomeEmail
 * @param  {Object} user
 * @return {Promise}
 */
const sendWelcomeEmail = user => {
  const email = {
    from: 'debated3d@gmail.com',
    to: user.email,
    subject: 'Bem vindo ao Debate3D',
    text: `Olá, ${user.name}, é um grande prazer ter você conosco nessa jornada de debates. Qualquer dúvida, temos nosso site com os nosso contatos, o endereço é debate3d.com.br. Um abraço`,
    html: `<p>Olá, ${user.name}, é um grande prazer ter você conosco nessa jornada de debates. Qualquer dúvida, temos nosso site com os nosso contatos, o endereço é debate3d.com.br.</p> <p>Um abraço</p>`
  }

  return sendgridClient.sendMail(email)
}

module.exports = sendWelcomeEmail
