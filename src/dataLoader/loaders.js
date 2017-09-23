const factoryDataLoader = require('./factory-dataloader')
const { curry } = require('ramda')

const loadData = curry((table, db, uid) => db(table).where({ uid }).first())

const loadDataByLoader = (loader, db) => factoryDataLoader(loader(db))

const loadDataByTable = (table, db) => factoryDataLoader(loadData(table, db))

module.exports = {
  loadDataByLoader,
  loadDataByTable
}
