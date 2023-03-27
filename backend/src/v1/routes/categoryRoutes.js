const express = require('express')
const categoryRouter = express.Router()

const categoryController = require('../../controllers/categoriesController')

categoryRouter.get('/', categoryController.getCategories)

module.exports = categoryRouter
