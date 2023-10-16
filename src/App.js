import { useState } from 'react'
import AppRoutes from './routes'

function App() {
  const initialUserState = localStorage.getItem('user') === 'true'
  const [isLoggedIn, setIsLoggedIn] = useState(initialUserState)
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'setIsLoggedIn')
    setIsLoggedIn(true)
  }
  return <AppRoutes isLoggedIn={isLoggedIn} onAuthButtonClick={handleLogin} />
}

export default App
