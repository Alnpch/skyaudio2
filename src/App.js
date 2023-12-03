import { useState } from 'react'
import AppRoutes from './routes'
import { refreshUserToken } from './API/apiUser'
import { UserContext } from './context/user'

function App() {
  // const initialUserState = localStorage.getItem('user') === 'true'
  // const [isLoggedIn, setIsLoggedIn] = useState(initialUserState)
  // const handleLogin = () => {
  //   localStorage.setItem('isLoggedIn', 'setIsLoggedIn')
  //   setIsLoggedIn(true)
  // }
  if (localStorage.getItem('user')) {
    setInterval(() => {
      refreshUserToken().then((response) => {
        localStorage.setItem('accessToken', JSON.stringify(response.access))
      })
    }, 100000)
  }

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')),
  )
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <AppRoutes  />
    </UserContext.Provider>
  )
}

export default App
