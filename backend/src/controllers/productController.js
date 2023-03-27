const productService = require('../services/productService')

const getAllProducts = async (req, res) => {
  const allProducts = await productService.getAllProducts()
  res.json({ status: 'OK', data: allProducts })
}

const getOneProduct = async (req, res) => {
  const product = await productService.getOneProduct(req.params.productId)
  res.json({ status: 'OK', data: product })
}

const createNewProduct = async (req, res) => {
  const { body } = req
  if (
    !body.name ||
    !body.price ||
    !body.description ||
    !body.category ||
    !body.brand ||
    !body.stock
  ) {
    return
  }

  const newProduct = {
    name: body.name,
    price: body.price,
    description: body.description,
    brand: body.brand,
    category: body.category,
    image: req.file.filename,
    stock: body.stock,
    offer: body.offer ? body.offer : 0,
    offerPrice: body.offerPrice ? body.offerPrice : 0
  }
  await productService.createNewProduct(newProduct)
  res.status(201).send({ status: 'OK' })
}

const updateOneProduct = (req, res) => {
  const { body } = req

  if (!body.name || !body.price || !body.description) {
    return
  }
  const productUpdate = {
    name: body.name,
    price: body.price,
    description: body.description,
    brand: body.brand,
    category: body.category,
    image: req.file ? req.file.filename : null,
    stock: body.stock,
    offer: body.offer ? body.offer : 0,
    offerPrice: body.offerPrice ? body.offerPrice : 0
  }

  const updatedProduct = productService.updateOneProduct(
    req.params.productId,
    productUpdate
  )
  res.send(updatedProduct)
}

const deleteOneProduct = (req, res) => {
  productService.deleteOneProduct(req.params.productId)
  res.send({ status: 'OK', data: 'Producto Eliminado' })
}

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct
}
