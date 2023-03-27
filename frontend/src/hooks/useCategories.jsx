import { useEffect, useState } from 'react'
import { categories } from '../services/categoriesService'

export function useCategories () {
  const [categoriesList, setCategoriesList] = useState(null)

  useEffect(() => {
    let categoriesData = []
    async function getCategories () {
      categoriesData = await categories()
      setCategoriesList(categoriesData.data)
    }

    getCategories()
  }, [])

  return { categoriesList }
}
