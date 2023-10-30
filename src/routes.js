import { Routes, Route } from 'react-router-dom'
import Collections from './Pages/Collections/Collections'
import Registration from './Pages/Registration/Registration'
import NotFound from './Pages/NotFound/NotFound'
import MyPlayList from './Pages/MyPlaylist/MyPlaylist'
import Home from './Pages/Home/Home'
import ProtectedRoute from './ProtectedRoute'
import Auth from './Pages/Auth/Auth'

function AppRoutes({ isLoggedIn, onAuthButtonClick }) {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Collections />} />
        <Route path="/favorites" element={<MyPlayList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route
        path="/login"
        element={<Auth onAuthButtonClick={onAuthButtonClick} />}
      />
      <Route
        path="/register"
        element={<Registration onAuthButtonClick={onAuthButtonClick} />}
      />
    </Routes>
  )
}

export default AppRoutes
