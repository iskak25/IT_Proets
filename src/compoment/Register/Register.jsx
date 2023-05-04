import React from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import Form from 'compoment/Form/Form'
import { setUser } from 'redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import Text from 'compoment/Text/Text'

const Register = () => {
  const dispatch = useDispatch()
  const naviget = useNavigate()

  const handleRegister = (email, passwodrd) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, passwodrd)
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
      .catch(console.log)
  }

  return (
    <>
      <Form
        title="Зарегистрироваться"
        handleClick={handleRegister}
        p={'вы уже зарегистрированы?'}
        link={'/Login'}
        a={'войти'}
        name={'Зарегистрироваться'}
      />
    </>
  )
}

export default Register
