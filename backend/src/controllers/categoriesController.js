const categoryService = require('../services/categoryService')

const getCategories = async (req, res) => {
  const allCategories = await categoryService.getCategories()
  res.json({ status: 'OK', data: allCategories })
}

module.exports = {
  getCategories
}
