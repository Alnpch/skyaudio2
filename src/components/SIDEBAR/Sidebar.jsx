import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../../context/user'
import * as S from './SidebarStyle'

function Sidebar() {
  const [Loading, setLoading] = useState(true)
  const { currentUser } = useUserContext();
  console.log(currentUser);
  const logOut = () => {
    console.log("ghg")
    localStorage.clear();
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  })
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{currentUser.username}</S.SidebarPersonalName>
        <NavLink to="/login">
              <S.SidebarAvatar src="img/icon/outsvg.svg" alt="out" onClick={logOut} />
            </NavLink>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
          <NavLink to="/category/1">
            <S.SidebarLink href="#name">
              {Loading ? (
                <S.SidebarImg src="img/skeleton2.svg" alt="day's playlist" />
              ) : (
                <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
              )}
            </S.SidebarLink>
            </NavLink>
          </S.SidebarItem>
          <S.SidebarItem>
          <NavLink to="/category/2">
            <S.SidebarLink href="#name">
              {Loading ? (
                <S.SidebarImg src="img/skeleton2.svg" alt="day's playlist" />
              ) : (
                <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
              )}
            </S.SidebarLink>
            </NavLink>
          </S.SidebarItem>
          <S.SidebarItem>
          <NavLink to="/category/3">
            <S.SidebarLink href="#name">
              {Loading ? (
                <S.SidebarImg src="img/skeleton2.svg" alt="day's playlist" />
              ) : (
                <S.SidebarImg src="img/playlist03.png" alt="day's playlist" />
              )}
            </S.SidebarLink>
            </NavLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
