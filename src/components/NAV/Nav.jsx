import { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
          <NavLink to="/">
            <S.MenuItem>
              <S.MenuLink href="http://">Главное</S.MenuLink>
            </S.MenuItem>
            </NavLink>
            <NavLink to="/favorites">
            <S.MenuItem className="menu__item">
              <S.MenuLink href="http://">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            </NavLink>
            <NavLink to="/login">
            <S.MenuItem className="menu__item">
              <S.MenuLink href="http://">Войти</S.MenuLink>
            </S.MenuItem>
            </NavLink>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default Nav
