export const categories = async () => {
  let categoriesResponse = []
  try {
    const response = await fetch('http://localhost:3500/api/v1/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const dataResponse = await response.json()
    categoriesResponse = dataResponse
  } catch (error) {
    categoriesResponse = error
  }

  return categoriesResponse
}
