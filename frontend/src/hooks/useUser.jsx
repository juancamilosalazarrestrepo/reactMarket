import { useEffect, useState } from 'react'

export function useUser () {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userJSON = window.localStorage.getItem('user')
    const userData = JSON.parse(userJSON)
    setUser(userData)
  }, [])

  return { user }
}
