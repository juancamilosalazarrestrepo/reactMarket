const createUser = async ({ name, password, email, phone }) => {
  let userCreated = null
  const data = {
    name,
    password,
    email,
    phone
  }

  try {
    const response = await fetch('http://localhost:3500/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const dataResponse = await response.json()
    userCreated = dataResponse
  } catch (error) {
    userCreated = error
  }

  return userCreated
}

export default createUser
