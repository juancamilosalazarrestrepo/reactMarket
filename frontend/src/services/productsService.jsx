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
