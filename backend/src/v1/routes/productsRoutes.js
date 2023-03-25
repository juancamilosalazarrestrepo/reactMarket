const express = require('express')
const productsRouter = express.Router()
const productsController = require('../../controllers/productController.js')
const validateToken = require('../../middlewares/validateToken')

productsRouter
  .get('/', productsController.getAllProducts)
  .get('/:productId', productsController.getOneProduct)
  .post('/', productsController.createNewProduct)
  .patch('/:userId', validateToken, productsController.updateOneProduct)
  .delete('/:userId', validateToken, productsController.deleteOneProduct)

module.exports = productsRouter
