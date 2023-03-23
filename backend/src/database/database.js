const { Sequelize } = require('sequelize')
const { DBConfig } = require('./config')

let db = {}

const Connection = async () => {
  db = new Sequelize(
    DBConfig.database,
    DBConfig.username,
    DBConfig.password,
    DBConfig
  )
  return db
}

Connection()

module.exports = { Connection, db }
