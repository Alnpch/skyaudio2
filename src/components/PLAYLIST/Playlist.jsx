import * as S from './PlaylistStyle'

function Playlist({ tracks, setActivTrack, setIsPlaying }) {
  return (
    <S.ContentPlaylist>
      {tracks.map((track) => (
        <S.PlaylistItem
          key={track.id}
          onClick={() => {
            setActivTrack(track)
            setIsPlaying(true)
            console.log(track);
          }}
        >
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImg>
              <S.TrackTitleLink>
                {track.name} <S.TrackTitleSpan></S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText> {track.time} </S.TrackTimeText>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </S.ContentPlaylist>
  )
}

export default Playlist
