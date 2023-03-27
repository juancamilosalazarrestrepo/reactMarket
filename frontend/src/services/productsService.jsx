export const products = async () => {
  let productsResponse = []
  try {
    const response = await fetch('http://localhost:3500/api/v1/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const dataResponse = await response.json()
    productsResponse = dataResponse
  } catch (error) {
    productsResponse = error
  }

  return productsResponse
}

export const getProductById = async (idProduct) => {
  let productResponse = []

  try {
    const response = await fetch(
      `http://localhost:3500/api/v1/products/${idProduct}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const dataResponse = await response.json()
    productResponse = dataResponse
  } catch (error) {
    productResponse = error
  }

  return productResponse
}

export const createProduct = async (dataProduct) => {
  let productResponse = []
  try {
    const response = await fetch('http://localhost:3500/api/v1/products', {
      method: 'POST',
      body: dataProduct
    })
    const dataResponse = await response.json()
    productResponse = dataResponse
  } catch (error) {
    productResponse = error
  }

  return productResponse
}

export const editProduct = async (dataProduct, idProduct, user) => {
  let productResponse = []

  try {
    const response = await fetch(
      `http://localhost:3500/api/v1/products/${idProduct}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: 'Bearer ' + user.token
        },
        body: dataProduct
      }
    )
    const dataResponse = await response.json()
    productResponse = dataResponse
  } catch (error) {
    productResponse = error
  }

  return productResponse
}

export const deleteProduct = async (idProduct, user) => {
  let productResponse = []

  try {
    const response = await fetch(
      `http://localhost:3500/api/v1/products/${idProduct}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + user.token
        }
      }
    )
    const dataResponse = await response.json()
    productResponse = dataResponse
  } catch (error) {
    productResponse = error
  }

  return productResponse
}
