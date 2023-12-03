export const registerUser = async ({ email, password }) => {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username: email,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  }
  const registerRequest = await fetch(
    `https://skypro-music-api.skyeng.tech/user/signup/`,
    data,
  )
  const response = await registerRequest.json()
  if (registerRequest.status === 400) {
    throw new Error(response)
  }
  console.log(response);
  return response
}

export const loginUser = async ({ email, password }) => {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  }
  const registerRequest = await fetch(
    `https://skypro-music-api.skyeng.tech/user/login/`,
    data,
  )
  const response = await registerRequest.json()
  console.log(response)
  if (registerRequest.status === 401) {
    throw new Error(response.detail)
  }

  return response
}

export const getUserToken = async ({ email, password }) => {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  }
  const registerRequest = await fetch(
    `https://skypro-music-api.skyeng.tech/user/token/`,
    data,
  )
  const response = await registerRequest.json()
  console.log(response)
  if (registerRequest.status === 401) {
    throw new Error(response.detail)
  }

  return response
}

export const refreshUserToken = async () => {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      refresh: JSON.parse(localStorage.getItem('refreshToken')),
    }),
    headers: {
      'Content-type': 'application/json',
    },
  }
  const registerRequest = await fetch(
    `https://skypro-music-api.skyeng.tech/user/token/refresh/`,
    data,
  )
  const response = await registerRequest.json()
  console.log(response)
  if (registerRequest.status === 401) {
    throw new Error(response.detail)
  }

  return response
}
