const sendgridClient = require('../../sendgrid/client')

/**
 * @method sendEmail
 * @param  {Object} user
 * @return {Promise}
 */
const sendEmail = _email => {
  const email = {
    from: 'debated3d@gmail.com',
    to: _email,
    subject: 'Recuperação de senha: Debate3D',
    html: `
    <p>
      Ei, vimos que você resetou sua senha, não deixe de acessar nossa plataforma em app.debate3d.com.br.
    </p>`
  }

  return sendgridClient.sendMail(email)
}

module.exports = sendEmail
