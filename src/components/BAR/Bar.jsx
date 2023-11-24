import { useEffect, useState, useRef } from 'react'
import * as S from './BarStyle'

function Bar({ activTrack }) {
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  })
  const [isPlaying, setIsPlaying] = useState(false)

  const audioComponentRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isRepeat, setIsRepeat] = useState(false)
  const [volume, setVolume] = useState(1)

  const handleStart = () => {
    console.log('playing')
    audioComponentRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    console.log('stopped')
    audioComponentRef.current.pause()
    setIsPlaying(false)
  }
  const nextTrack = () => {
    alert('еще не реализовано')
  }
  useEffect(() => {
    const ref = audioComponentRef.current

    const timeUpdate = () => {
      if (ref.currentTime && ref.duration) {
        setCurrentTime(ref.currentTime)
        setDuration(ref.duration)
      } else {
        setCurrentTime(0)
        setDuration(0)
      }
    }
    ref.addEventListener('timeupdate', timeUpdate)

    return () => {
      ref.removeEventListener('timeupdate', timeUpdate)
    }
  })

  const timeOnChange = (event) => {
    audioComponentRef.current.currentTime = event.target.value
  }

  const volumeOnChange = (event) => {
    const newVolume = audioComponentRef.current.volume
    setVolume(newVolume)
    audioComponentRef.current.volume = event.target.value
  }
  const repeatClick = () => {
    console.log('repeat')
    audioComponentRef.current.loop = !isRepeat
    setIsRepeat(!isRepeat)
  }
  const togglePlay = isPlaying ? handleStop : handleStart
  return (
    <>
      <S.AudioComponent
        controls
        ref={audioComponentRef}
        src={activTrack.track_file}
        autoPlay
      />

      <S.Bar>
        <S.BarContent>
          <S.Timer>
            {Math.trunc(currentTime / 60) < 10
              ? `0${Math.trunc(currentTime / 60)}`
              : Math.trunc(currentTime / 60)}
            :
            {Math.trunc(currentTime % 60) < 10
              ? `0${Math.trunc(currentTime % 60)}`
              : Math.trunc(currentTime % 60)}
            /
            {Math.trunc(duration / 60) < 10
              ? `0${Math.trunc(duration / 60)}`
              : Math.trunc(duration / 60)}
            :
            {Math.trunc(duration % 60) < 10
              ? `0${Math.trunc(duration % 60)}`
              : Math.trunc(duration % 60)}
          </S.Timer>
          <S.BarPlayerProgress
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            step={0.01}
            onChange={timeOnChange}
            $color="#ff0000"
          />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.BarPlayerControls>
                <S.BarPlayerBtnPrev>
                  <S.BarPlayerBtnPlayPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.BarPlayerBtnPlayPrevSvg>
                </S.BarPlayerBtnPrev>
                <S.BarPlayerBtnPlay>
                  <S.BarPlayerBtnPlaySvg alt="play" onClick={togglePlay}>
                    {isPlaying ? (
                      <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                    ) : (
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    )}
                  </S.BarPlayerBtnPlaySvg>
                </S.BarPlayerBtnPlay>
                <S.BarPlayerBtnNext>
                  <S.BarPlayerBtnNextSvg alt="next" onClick={nextTrack}>
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.BarPlayerBtnNextSvg>
                </S.BarPlayerBtnNext>
                <S.BarPlayerBtnRepeat>
                  <S.BarPlayerBtnRepeatSvg alt="repeat" onClick={repeatClick}>
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
                        {activTrack.name}
                      </S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink href="http://">
                        {activTrack.author}
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
                  <S.VolumeProgressLine
                    className="_btn"
                    type="range"
                    name="range"
                    value={volume}
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={volumeOnChange}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  )
}

export default Bar
