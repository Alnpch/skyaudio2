import Bar from './Bar'
import Content from './Content'
import Nav from './Nav'
import Search from './Search'
import Sidebar from './Sidebar'

function Main() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav />
          <div className="main__centerblock centerblock">
            <Search />
            <Content />
          </div>
          <Sidebar />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default Main
