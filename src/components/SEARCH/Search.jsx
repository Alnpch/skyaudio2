import { useState, useEffect } from 'react'
import ModalGenre from '../ModalGenre'
import ModalPerf from '../ModalPerf'
import ModalYear from '../ModalYear'
import * as S from './SearchStyle'

function Search() {
  // const [activeModal, setActiveModal] = useState(null)
  const [modalPerf, setModalPerf] = useState(false)
  const [modalGenre, setModalGenre] = useState(false)
  const [modalYear, setModalYear] = useState(false)
  const modalTogglePerf = () =>
    setModalPerf((currentmodalPerf) => !currentmodalPerf)
  const modalToggleGenre = () =>
    setModalGenre((currentmodalGenre) => !currentmodalGenre)
  const modalToggleYear = () =>
    setModalYear((currentmodalYear) => !currentmodalYear)

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
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchInputText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterblockSearch>
      <S.CenterblockHeading>Треки</S.CenterblockHeading>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterButton
          id="modal"
          onClick={modalTogglePerf}
          onKeyUp={modalTogglePerf}
          role="button"
          tabIndex={0}
        >
          исполнителю
        </S.FilterButton>
        <S.FilterButton
          onClick={modalToggleYear}
          onKeyUp={modalToggleYear}
          role="button"
          tabIndex={0}
        >
          году выпуска
        </S.FilterButton>
        <S.FilterButton
          onClick={modalToggleGenre}
          onKeyUp={modalToggleGenre}
          role="button"
          tabIndex={0}
        >
          жанру
        </S.FilterButton>
        {modalPerf && <ModalPerf />}
        {modalYear && <ModalYear />}
        {modalGenre && <ModalGenre />}
      </S.CenterblockFilter>
    </>
  )
}

export default Search
