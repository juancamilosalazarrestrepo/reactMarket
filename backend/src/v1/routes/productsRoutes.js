const express = require('express')
const productsRouter = express.Router()
const productsController = require('../../controllers/productController.js')
const validateToken = require('../../middlewares/validateToken')
const uploadFile = require('../../middlewares/multerMiddleware')
const multer = require('multer')

productsRouter
  .get('/', productsController.getAllProducts)
  .get('/:productId', productsController.getOneProduct)
  .post('/', uploadFile.single('image'), productsController.createNewProduct)
  .patch('/:productId', validateToken, productsController.updateOneProduct)
  .delete('/:productId', validateToken, productsController.deleteOneProduct)

module.exports = productsRouter
