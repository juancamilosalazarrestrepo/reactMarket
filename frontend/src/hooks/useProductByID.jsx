import { useEffect, useState } from 'react'
import { getProductById } from '../services/productsService'

export function useProductsById(idProduct) {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    console.log('llego')
    console.log('idproduct', idProduct)

    let productData = []
    async function getProduct() {
      productData = await getProductById(idProduct)
      console.log('producto data', productData)
      setProduct(productData.data[0])
    }

    getProduct()
  }, [])

  return { product }
}
