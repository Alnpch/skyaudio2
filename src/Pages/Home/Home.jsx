import { useEffect, useState } from 'react'
import Bar from '../../components/BAR/Bar'
import Content from '../../components/CONTENT/Content'
import Nav from '../../components/NAV/Nav'
import Search from '../../components/SEARCH/Search'
import Sidebar from '../../components/SIDEBAR/Sidebar'
import * as S from './HomeStyle'
import getTrack from '../../api'
import Playlist from '../../components/PLAYLIST/Playlist'
import PlaylistSkeleton from '../../components/PLAYLIST/PlaylistSkeleton'

function Home() {
  const [activTrack, setActivTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [loading, setLoading] = useState(true)
  const [tracks, setTrackList] = useState([])
  const [newApiError, setNewApiError] = useState(null)
  useEffect(() => {
    getTrack()
      .then((data) => {
        setTrackList(data)
      })
      .catch((error) => {
        setNewApiError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <S.MainCenterblock>
            <Search tracks={tracks} />
            <Content />
            {newApiError ? <p>Не удалось загрузить данные</p> : null}
            {loading ? (
              <PlaylistSkeleton />
            ) : (
              <Playlist
                tracks={tracks}
                activTrack={activTrack}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setActivTrack={setActivTrack}
              />
            )}
          </S.MainCenterblock>
          <Sidebar />
        </S.Main>
        {activTrack && (
          <Bar
            loading={loading}
            activTrack={activTrack}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setActivTrack={setActivTrack}
          />
        )}

        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  )
}

export default Home
