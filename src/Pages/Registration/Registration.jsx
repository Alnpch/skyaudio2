import * as R from './RegistrationStyle'
import * as S from './HomeStyle'

function Registration({ onAuthButtonClick }) {
  return (
    <S.Wrapper>
      <S.Container>
        <R.CenterBlock>
          <R.CenterBlockItem>
            <R.LogoImage>
              <R.LogoImageItem src="/img/logoBlack.png" alt="logo" />
            </R.LogoImage>
            <R.InputBlock>
              <R.InputBlockItem type="text" placeholder="Почта" />

              <R.InputBlockItem type="password" placeholder="Пароль" />

              <R.InputBlockItem
                type="password"
                placeholder="Повторите пароль"
              />
            </R.InputBlock>
            <div>
              <R.ButtonRegister to="/" onClick={onAuthButtonClick}>
                Зарегистрироваться
              </R.ButtonRegister>
            </div>
          </R.CenterBlockItem>
        </R.CenterBlock>
      </S.Container>
    </S.Wrapper>
  )
}

export default Registration
