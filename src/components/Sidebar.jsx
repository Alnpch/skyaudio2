import { useState, useEffect } from 'react'

function Sidebar() {
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  })
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#name">
              {Loading ? (
                <img
                  className="sidebar__img"
                  src="img/skeleton2.svg"
                  alt="day's playlist"
                />
              ) : (
                <img
                  className="sidebar__img"
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              )}
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#name">
              {Loading ? (
                <img
                  className="sidebar__img"
                  src="img/skeleton2.svg"
                  alt="day's playlist"
                />
              ) : (
                <img
                  className="sidebar__img"
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              )}
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#name">
              {Loading ? (
                <img
                  className="sidebar__img"
                  src="img/skeleton2.svg"
                  alt="day's playlist"
                />
              ) : (
                <img
                  className="sidebar__img"
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
