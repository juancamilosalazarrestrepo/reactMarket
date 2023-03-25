import { useEffect, useState } from 'react'
import { products } from '../services/productsService'

export function useProducts () {
  const [productsList, setProductsList] = useState(null)

  useEffect(() => {
    let productsData = []
    async function getProducts () {
      productsData = await products()
      setProductsList(productsData.data)
    }

    getProducts()
  }, [])

  return { productsList }
}
