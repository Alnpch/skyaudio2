import { Routes, Route } from 'react-router-dom'
import Collections from './Pages/Collections/Collections'
import NotFound from './Pages/NotFound/NotFound'
import MyPlayList from './Pages/MyPlaylist/MyPlaylist'
import Home from './Pages/Home/Home'
import ProtectedRoute from './ProtectedRoute'
import Auth from './Pages/Auth/Auth'

function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAllowed={Boolean(localStorage.getItem('user'))} />
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Collections />} />
        <Route path="/favorites" element={<MyPlayList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Auth isLoginMode />} />
      <Route path="/register" element={<Auth isLoginMode={false} />} />
    </Routes>
  )
}

export default AppRoutes
