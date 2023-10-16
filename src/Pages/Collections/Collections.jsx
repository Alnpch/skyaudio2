import { useParams } from 'react-router-dom'
import * as S from './CollectionsStyle'

function Collections() {
  const params = useParams()
  return (
    <div>
      <S.CollectionsHeading>{`Collection ${params.id}`}</S.CollectionsHeading>
    </div>
  )
}

export default Collections
