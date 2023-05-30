import Form from 'compoment/Auth/Form/Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from 'redux/slices/userSlice'

const Login = () => {
  const dispatch = useDispatch()
  const naviget = useNavigate()

  const handleLogin = (email, passwodrd) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, passwodrd)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
          naviget('/'),
        )
      })
      .catch(console.log())
  }

  return (
    <>
      <Form
        title="Войти"
        handleClick={handleLogin}
        p={'Нет аккаунта? '}
        link={'/register'}
        a={'зарегистрироваться'}
        name={'Авторизация'}
      />
    </>
  )
}

export default Login
