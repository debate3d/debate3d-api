const DataLoader = require('dataloader')
const { curry } = require('ramda')
const { isFunction, isString } = require('lodash')

const position = curry((db, id) => {
  return db('position').where({ id }).first()
})

const tables = {
  tag: 'tags',
  position
}

const loadDataByLoader = (loader, db) => {
  return new DataLoader(keys => {
    return Promise.all(keys.map(loader(db)))
  })
}

const loadData = curry((table, db, uid) => {
  return db(table).where({ uid }).first()
})

const loadDataByTable = (table, db) => {
  return new DataLoader(keys => {
    return Promise.all(keys.map(loadData(table, db)))
  })
}

const factory = db => Object.keys(tables).reduce((acc, key) => {
  if (isFunction(tables[key])) {
    acc[key] = loadDataByLoader(tables[key], db)
  }
  if (isString(tables[key])) {
    acc[key] = loadDataByTable(tables[key], db)
  }
  return acc
}, {})

module.exports = factory
