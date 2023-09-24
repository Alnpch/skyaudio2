import Bar from '../BAR/Bar'
import Content from '../CONTENT/Content'
import Nav from '../NAV/Nav'
import Search from '../SEARCH/Search'
import Sidebar from '../SIDEBAR/Sidebar'
import * as S from './MainStyle'

function Main() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <S.MainCenterblock>
            <Search />
            <Content />
          </S.MainCenterblock>
          <Sidebar />
        </S.Main>
        <Bar />
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  )
}

export default Main
