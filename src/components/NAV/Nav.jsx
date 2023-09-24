import { useState } from 'react'
import * as S from './NavStyle'

function Nav() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible((currentVisible) => !currentVisible)
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo1.svg" alt="logo" />
      </S.NavLogo>
      <S.NavBurger
        onClick={toggleVisibility}
        onKeyUp={toggleVisibility}
        role="button"
        tabIndex={0}
      >
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink href="http://">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem className="menu__item">
              <S.MenuLink href="http://">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem className="menu__item">
              <S.MenuLink href="http://">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default Nav
