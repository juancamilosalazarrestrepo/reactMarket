const { db } = require('../database/database')
const { QueryTypes } = require('sequelize')
const { v4: uuid } = require('uuid')

const getAllProducts = async () => {
  const AllProducts = await db.query('SELECT * FROM products', {
    type: QueryTypes.SELECT
  })
  return AllProducts
}
const getOneProduct = async (id) => {
  let product = await db.query('SELECT * FROM products WHERE id = :id', {
    replacements: {
      id
    },
    type: QueryTypes.SELECT
  })
  if (product.length === 0) {
    product = [{ error: 'El Producto No Existe' }]
  }
  return product
}
const createNewProduct = async (newProduct) => {
  const id = uuid()
  const createdProduct = await db.query(
    'INSERT INTO products (id,name,price,description,brand,category,image,stock,offer,offerPrice) VALUES (:id,:name,:price,:description,:brand,:category,:image,:stock,:offer,:offerPrice) ;',
    {
      replacements: {
        id,
        name: newProduct.name,
        price: newProduct.price,
        description: newProduct.description,
        brand: newProduct.brand,
        category: newProduct.category,
        image: newProduct.image,
        stock: newProduct.stock,
        offer: newProduct.offer,
        offerPrice: newProduct.offerPrice
      },
      type: QueryTypes.INSERT
    }
  )

  return createdProduct
}
const updateOneProduct = async (id, productUpdate) => {
  const updatedProduct = await db.query(
    'UPDATE products SET name = :name, price = :price , description = :description , brand = :brand , category = :category ' +
      (productUpdate.image ? `,image = '${productUpdate.image}'` : '') +
      ', stock = :stock , offer = :offer , offerPrice = :offerPrice WHERE id = :id',
    {
      replacements: {
        id,
        name: productUpdate.name,
        price: productUpdate.price,
        description: productUpdate.description,
        brand: productUpdate.brand,
        category: productUpdate.category,
        stock: productUpdate.stock,
        offer: productUpdate.offer,
        offerPrice: productUpdate.offerPrice
      },
      type: QueryTypes.UPDATE,
      returning: true
    }
  )

  return updatedProduct
}
const deleteOneProduct = async (id) => {
  await db.query('DELETE FROM products WHERE id = :id', {
    replacements: {
      id
    },
    type: QueryTypes.DELETE,
    returning: true
  })
}

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct
}
