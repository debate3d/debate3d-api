const nothingResult = function () {
  return this.response({
    data: [],
    message: 'Sua pesquisa não retornou nenhum resultado'
  })
}

const userNotExists = function (id) {
  return this.response({
    data: [],
    message: `O usuário com o id ${id} não existe no banco de dados`
  })
}

const replyMessage = function (message) {
  return this.response({
    data: [],
    message
  })
}

const success = function () {
  return this.response({ status: 'ok' })
}

const notSuccess = function () {
  return this.response({ status: 'not ok' })
}

const returnRows = function (rows) {
  return this.response({ data: rows })
}

const returnToken = function (token) {
  return this.response({
    token
  }).code(201)
}

exports.register = function (server, options, next) {
  server.decorate('reply', 'nothingResult', nothingResult)
  server.decorate('reply', 'userNotExists', userNotExists)
  server.decorate('reply', 'replyMessage', replyMessage)
  server.decorate('reply', 'success', success)
  server.decorate('reply', 'notSuccess', notSuccess)
  server.decorate('reply', 'returnRows', returnRows)
  server.decorate('reply', 'returnToken', returnToken)
  return next()
}

exports.register.attributes = {
  name: 'decorators'
}
