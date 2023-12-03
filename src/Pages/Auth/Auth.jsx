import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/user'
import { registerUser, loginUser } from '../../API/apiUser'
import * as L from './AuthStyle'
import * as S from './HomeStyle'

function Login({ isLoginMode }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState(null)
  const [button, setButton] = useState(false)
  const navigate = useNavigate()
  const { setCurrentUser } = useUserContext()

  const handleLogin = () => {
    setButton(true)
    if (!email) {
      setError('Неверный логин')
      setButton(false)
    } else if (!password) {
      setError('Неверный пароль')
      setButton(false)
    } else {
      loginUser({ email, password })
        .then((response) => {
          localStorage.setItem('user', JSON.stringify(response))
          setButton(false)
          setCurrentUser(JSON.parse(localStorage.getItem('user')))
          navigate('/')
        })
        .catch(() => {
          setError(error.message)
          setButton(false)
        })
    }
  }
  const handleRegister = () => {
    setButton(true)
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      setButton(false)
    } else if (!email) {
      setError('Не указана почта')
      setButton(false)
    } else if (!password) {
      setError('Не указан пароль')
      setButton(false)
    } else {
      registerUser({ email, password })
        .then((response) => {
          localStorage.setItem('user', JSON.stringify(response))
          setButton(false)
          navigate('/login')
          
        })
        .catch(() => {
          setError(error)
          setButton(false)
          
        })
    }
  }
  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.Wrapper>
      <S.Container>
        <L.CenterBlock>
          <L.CenterBlockItem>
            <L.LogoImage>
              <L.LogoImageItem src="/img/logoBlack.png" alt="logo" />
            </L.LogoImage>
            {isLoginMode ? (
              <>
                <L.InputBlock>
                  <L.InputItem
                    type="text"
                    name="login"
                    placeholder="Почта"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}
                  />

                  <L.InputItem
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                  />
                </L.InputBlock>
                {error && <L.Error>{error}</L.Error>}
                <L.ButtonBlock>
                  <L.ButtonEnter
                    onClick={() => handleLogin({ email, password })}
                  >
                    Войти
                  </L.ButtonEnter>

                  <L.ButtonRegister to="/register">
                    Зарегистрироваться
                  </L.ButtonRegister>
                </L.ButtonBlock>
              </>
            ) : (
              <>
                <L.InputBlock>
                  <L.InputItem
                    type="text"
                    name="login"
                    placeholder="Почта"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}
                  />

                  <L.InputItem
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                  />
                  <L.InputItem
                    type="password"
                    name="repeat-password"
                    placeholder="Повторите пароль"
                    value={repeatPassword}
                    onChange={(event) => {
                      setRepeatPassword(event.target.value)
                    }}
                  />
                </L.InputBlock>
                {error && <L.Error>{error}</L.Error>}
                <L.ButtonBlock>
                  <L.ButtonRegister
                    onClick={handleRegister}
                    disabled={button}
                  >
                    Зарегистрироваться
                  </L.ButtonRegister>
                </L.ButtonBlock>
              </>
            )}
            {/* <L.InputBlock>
              <L.InputItem type="username" placeholder="Почта" />

              <L.InputItem type="password" placeholder="Пароль" />
            </L.InputBlock>
            <L.ButtonBlock>
              <L.ButtonEnter to="/" onClick={onAuthButtonClick}>
                Войти
              </L.ButtonEnter>

              <L.ButtonRegister to="/register">
                Зарегистрироваться
              </L.ButtonRegister>
            </L.ButtonBlock> */}
          </L.CenterBlockItem>
        </L.CenterBlock>
      </S.Container>
    </S.Wrapper>
  )
}
export default Login
