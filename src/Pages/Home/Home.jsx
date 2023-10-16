import Bar from '../../components/BAR/Bar'
import Content from '../../components/CONTENT/Content'
import Nav from '../../components/NAV/Nav'
import Search from '../../components/SEARCH/Search'
import Sidebar from '../../components/SIDEBAR/Sidebar'
import * as S from './HomeStyle'

function Home() {
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

export default Home
