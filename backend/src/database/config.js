require('dotenv').config()

exports.DBConfig = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true
    }
  },
  logging: false
}
