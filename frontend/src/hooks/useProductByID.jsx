import { useEffect, useState } from 'react'
import { getProductById } from '../services/productsService'

export function useProductsById (idProduct) {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    let productData = []
    async function getProduct () {
      productData = await getProductById(idProduct)
      setProduct(productData.data[0])
    }

    getProduct()
  }, [])

  return { product }
}
