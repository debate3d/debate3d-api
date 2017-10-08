const Boom = require('boom')
const Bcrypt = require('bcrypt')
const Joi = require('joi')
const moment = require('moment')
const generator = require('node-uuid')
const { isEmpty } = require('lodash')
const { head } = require('ramda')

const { routeErrorHandler } = require('../../helpers/bugnag')
const db = require('../../../db')
const { createToken } = require('../../helpers/auth')

const auth_register = {
  method: 'POST',
  path: '/auth/users',
  handler ({ payload }, reply) {
    const { email, password, name } = payload
    return db('users').where({ email })
      .then(rows => {
        if (isEmpty(rows)) {
          const salt = Bcrypt.genSaltSync(10)
          const hash = Bcrypt.hashSync(password, salt)
          const created = moment().format('YYYY-MM-DD')
          const uid = generator()
          const user = {
            email,
            password: hash,
            created,
            uid,
            ponts: 0,
            name,
            subscriber: false,
            is_debater: false,
            is_moderator: false
          }
          return db('users').insert(user).returning('uid')
            .then(head)
            .then(uid => reply.returnToken(createToken({ uid })))
            .catch(err => {
              if (err) throw err
              routeErrorHandler(err, 'badImplementation', reply)
            })
        }
        const msgErr = `O email ${email} já está cadastrado no banco de dados`
        return reply(Boom.unauthorized(msgErr))
      })
      .catch(err => {
        if (err) throw err
        console.error(err)
        routeErrorHandler(err, 'badImplementation', reply)
      })
  },
  config: {
    validate: {
      payload: {
        email: Joi.string().email().required(),
        password: Joi.string().min(1).max(50).required(),
        name: Joi.string().max(50).required()
      }
    }
  }
}

module.exports = auth_register
