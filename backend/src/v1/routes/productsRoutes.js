const express = require('express')
const productsRouter = express.Router()
const productsController = require('../../controllers/productController.js')
const validateToken = require('../../middlewares/validateToken')
const uploadFile = require('../../middlewares/multerMiddleware')

productsRouter
  .get('/', productsController.getAllProducts)
  .get('/:productId', productsController.getOneProduct)
  .post('/', uploadFile.single('image'), productsController.createNewProduct)
  .patch(
    '/:productId',
    uploadFile.single('image'),
    validateToken,
    productsController.updateOneProduct
  )
  .delete('/:productId', validateToken, productsController.deleteOneProduct)

module.exports = productsRouter
