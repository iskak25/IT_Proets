import React from 'react'
import { Link } from 'react-router-dom'
import navStyle from './Navbar.module.scss'
import { useAuth } from 'hooks/useAuth'
import { ADMIN } from 'helpers/consts'

const Navbar = () => {
  const { isAuth, email } = useAuth()

  return (
    <>
      <div className={navStyle.container}>
        <div className={navStyle.content}>
          <Link to="/">
            <h3 className={navStyle.h3}>ГЛАВНАЯ</h3>
          </Link>

          <Link to="/сontacts">
            <h3 className={navStyle.h3}>КОНТАКТЫ</h3>
          </Link>
          <Link to="/aboutUs">
            <h3 className={navStyle.h3}>О НАС</h3>
          </Link>
          <Link to="/project">
            <h3 className={navStyle.h3}>ПРОЕКТЫ</h3>
          </Link>

          {email == ADMIN ? (
            <Link to="/admin">
              <h3 className={navStyle.h3}>ADMIN PANEL</h3>
            </Link>
          ) : (
            ''
          )}

          {isAuth ? (
            <Link to="/profil">
              <p className={navStyle.p}>{email}</p>
            </Link>
          ) : (
            <Link to="/login">
              <button className={navStyle.login}>Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
