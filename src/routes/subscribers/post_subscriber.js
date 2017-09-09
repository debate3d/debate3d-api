const Boom = require('boom')
const Joi = require('joi')
const moment = require('moment')
const { selectWhere, insert, update } = require('../../helpers/database')

const tables = require('../../helpers/tables')

const post_subscriber = {
  method: 'POST',
  path: '/subscribers',
  handler (request, reply) {
    const { uid_user } = request.payload
    const dt_started = moment().format('YYYY-MM-DD')
    const dt_finished = moment(dt_started).add(1, 'y').format('YYYY-MM-DD')
    const updateSubscriber = {
      uid_user,
      dt_started,
      dt_finished,
      status: 'ok'
    }
    const updateUser = {
      subscriber: true
    }
    const whereUser = {
      uid: uid_user
    }
    return selectWhere(tables.subscribers(), 'id', { uid_user })
      .orderBy('id', 'desc')
      .first()
      .then(row => {
        let last = true
        if (row !== undefined) {
          const where = { id: row.id }
          const updated = { status: 'not ok' }
          last = update(tables.subscribers(), updated, where)
        }
        const insertQuery = insert(tables.subscribers(), updateSubscriber, 'id')
        const subscriberUser = update(tables.users(), updateUser, whereUser)
        return Promise.all([last, insertQuery, subscriberUser])
          .then(results => {
            if (results.length) {
              return reply.success()
            }
          })
          .catch(err => {
            reply(Boom.badImplementation(err))
            if (err) throw err
          })
      })
      .catch(err => {
        reply(Boom.badImplementation(err))
        if (err) throw err
      })
  },
  config: {
    validate: {
      payload: {
        uid_user: Joi.string().required()
      }
    },
    auth: {
      strategy: 'jwt'
    }
  }
}

module.exports = post_subscriber
