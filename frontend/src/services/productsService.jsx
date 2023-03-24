const products = async () => {
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

export default products
