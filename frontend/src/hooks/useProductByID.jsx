import { useEffect, useState } from 'react'
import { getProductById } from '../services/productsService'

export function useProductsById (idProduct) {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    console.log('llego')
    console.log('idproduct', idProduct)

    let productData = []
    async function getProduct () {
      productData = await getProductById(idProduct)
      console.log('producto data', productData)
      if(productData.data.length === 0){
        setProduct('El Producto no existe')
        return
      }
      setProduct(productData.data[0])
    }

    getProduct()
  }, [])

  return { product }
}
