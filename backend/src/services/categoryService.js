const { db } = require('../database/database')
const { QueryTypes } = require('sequelize')

const getCategories = async () => {
  const AllCategories = await db.query('SELECT * FROM category', {
    type: QueryTypes.SELECT
  })
  return AllCategories
}

module.exports = {
  getCategories
}
