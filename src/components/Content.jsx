import React, { useState } from "react";
import { useEffect } from "react";
import Playlist from "./Playlist";
import PlaylistSkeleton from "./PlaylistSkeleton";
function Content() {
  const [ isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false),2000)
  })
  return (
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      {isLoading ? <PlaylistSkeleton /> : <Playlist />}
    </div>
  );
}

export default Content;
