import { useEffect, useState } from 'react'
import * as S from './BarStyle'

function Bar() {
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  })
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.BarPlayerControls>
              <S.BarPlayerBtnPrev>
                <S.BarPlayerBtnPlayPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.BarPlayerBtnPlayPrevSvg>
              </S.BarPlayerBtnPrev>
              <S.BarPlayerBtnPlay>
                <S.BarPlayerBtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.BarPlayerBtnPlaySvg>
              </S.BarPlayerBtnPlay>
              <S.BarPlayerBtnNext>
                <S.BarPlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.BarPlayerBtnNextSvg>
              </S.BarPlayerBtnNext>
              <S.BarPlayerBtnRepeat>
                <S.BarPlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.BarPlayerBtnRepeatSvg>
              </S.BarPlayerBtnRepeat>
              <S.BarPlayerBtnShuffle>
                <S.BarPlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.BarPlayerBtnShuffleSvg>
              </S.BarPlayerBtnShuffle>
            </S.BarPlayerControls>

            <S.BarPlayerTrackPlay>
              {Loading ? (
                <img src="img/skeleton3.svg" alt="" />
              ) : (
                <S.TrackPlayContain>
                  <S.TrackPlayImg>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImg>
                  <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink href="http://">
                      Ты та...
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">
                      Баста
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
              )}
              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.BarPlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImg>
                <S.VolumeSvg>
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImg>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default Bar
