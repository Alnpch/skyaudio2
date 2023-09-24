import { useEffect, useState } from 'react'
import Playlist from '../PLAYLIST/Playlist'
import PlaylistSkeleton from '../PLAYLIST/PlaylistSkeleton'
import * as S from './ContentStyle'

function Content() {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  })
  return (
    <S.ContentCenterBlock>
      <S.ContentTitle>
        <S.PlayListTitleColOne>Трек</S.PlayListTitleColOne>
        <S.PlayListTitleColTwo>ИСПОЛНИТЕЛЬ</S.PlayListTitleColTwo>
        <S.PlayListTitleColThree>АЛЬБОМ</S.PlayListTitleColThree>
        <S.PlayListTitleColFour>
          <S.PlayListTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.PlayListTitleSvg>
        </S.PlayListTitleColFour>
      </S.ContentTitle>
      {isLoading ? <PlaylistSkeleton /> : <Playlist />}
    </S.ContentCenterBlock>
  )
}

export default Content
