export const products = async () => {
  let products = []
  await fetch('http://localhost:3500/api/v1/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      products = data
    })
    .catch((error) => {
      products = error
    })

  return products
}

export const getProductById = async (idProduct) => {
  let product = []
  await fetch(`http://localhost:3500/api/v1/products/${idProduct}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      product = data
    })
    .catch((error) => {
      product = error
    })

  return product
}

export const createProduct = async (dataProduct) => {
  console.log('product data', dataProduct.getAll('image'))
  let product = []
  await fetch('http://localhost:3500/api/v1/products', {
    method: 'POST',
    body: dataProduct
  })
    .then((response) => response.json())
    .then((data) => {
      product = data
    })
    .catch((error) => {
      product = error
    })

  return product
}

export const editProduct = async (dataProduct, idProduct, user) => {
  let product = []
  await fetch(`http://localhost:3500/api/v1/products/${idProduct}`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    body: dataProduct
  })
    .then((response) => response.json())
    .then((data) => {
      product = data
    })
    .catch((error) => {
      product = error
    })

  return product
}

export const deleteProduct = async (idProduct, user) => {
  console.log('id product in service', user)
  let product = []
  await fetch(`http://localhost:3500/api/v1/products/${idProduct}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + user.token
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('dara', data)
      product = data
    })
    .catch((error) => {
      console.log('dara', error)
      product = error
    })

  return product
}
