import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ModalGenre from './ModalGenre'
import ModalPerf from './ModalPerf'
import ModalYear from './ModalYear'

function Search() {
  const [modalPerf, setModalPerf] = useState(false)
  const [modalGenre, setModalGenre] = useState(false)
  const [modalYear, setModalYear] = useState(false)
  const modalTogglePerf = () => setModalPerf(!modalPerf)
  const modalToggleGenre = () => setModalGenre(!modalGenre)
  const modalToggleYear = () => setModalYear(!modalYear)

  useEffect(() => {
    if (modalPerf) {
      setModalGenre(false)
      setModalYear(false)
    }
  }, [modalPerf])

  useEffect(() => {
    if (modalYear) {
      setModalPerf(false)
      setModalGenre(false)
    }
  }, [modalYear])

  useEffect(() => {
    if (modalGenre) {
      setModalPerf(false)
      setModalYear(false)
    }
  }, [modalGenre])

  return (
    <>
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div
          className="filter__button button-author _btn-text"
          onClick={modalTogglePerf}
        >
          исполнителю
        </div>
        <div
          className="filter__button button-year _btn-text"
          onClick={modalToggleYear}
        >
          году выпуска
        </div>
        <div
          className="filter__button button-genre _btn-text"
          onClick={modalToggleGenre}
        >
          жанру
        </div>
        {modalPerf && <ModalPerf />}
        {modalYear && <ModalYear />}
        {modalGenre && <ModalGenre />}
      </div>
    </>
  )
}

export default Search
