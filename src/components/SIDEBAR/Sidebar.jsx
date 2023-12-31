import { useState, useEffect } from 'react'
import * as S from './SidebarStyle'

function Sidebar() {
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  })
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarAvatar></S.SidebarAvatar>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarLink href="#name">
              {Loading ? (
                <S.SidebarImg src="img/skeleton2.svg" alt="day's playlist" />
              ) : (
                <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#name">
              {Loading ? (
                <S.SidebarImg src="img/skeleton2.svg" alt="day's playlist" />
              ) : (
                <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#name">
              {Loading ? (
                <S.SidebarImg src="img/skeleton2.svg" alt="day's playlist" />
              ) : (
                <S.SidebarImg src="img/playlist03.png" alt="day's playlist" />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
