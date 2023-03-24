const login = async ({ email, password }) => {
  console.log(email, password)
  let loginResponse = ''
  const data = {
    email,
    password
  }
  await fetch('http://localhost:3500/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      loginResponse = data
    })
    .catch((error) => {
      loginResponse = error
    })

  return loginResponse
}

export default login
