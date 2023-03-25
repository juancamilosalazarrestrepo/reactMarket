const createUser = async ({ name, password, email, phone }) => {
  console.log(name)
  let userCreated = null
  const data = {
    name,
    password,
    email,
    phone
  }
  console.log('data', data)
  await fetch('http://localhost:3500/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('respuesta', data)
      userCreated = data
    })
    .catch((error) => {
      userCreated = error
    })

  return userCreated
}

export default createUser
