import React from 'react'
import { Link } from 'react-router-dom'
import navStyle from './Navbar.module.scss'
import user_icon from '../../assets/img/user_icon.svg'
import { useAuth } from 'hooks/useAuth'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { isAuth, email } = useAuth()

  return (
    <>
      <div className={navStyle.container}>
        <div className={navStyle.content}>
          <Link to="">
            <a href="">
              <h3 className={navStyle.h3}>КУРСЫ</h3>
            </a>
          </Link>
          <Link to="">
            <a href="">
              <h3 className={navStyle.h3}>МЕТОДИТКА</h3>
            </a>
          </Link>
          <Link to="">
            <a href="">
              <h3 className={navStyle.h3}>ЦЕНА</h3>
            </a>
          </Link>
          <Link to="">
            <a href="">
              <h3 className={navStyle.h3}>ОТЗЫВЫ</h3>
            </a>
          </Link>

          <Link to="">
            <a href="">
              <h2 className={navStyle.h3}>CREATE</h2>
            </a>
          </Link>
          <Link to="">
            <a href="">
              <h3 className={navStyle.h3}>КОНТАКТЫ</h3>
            </a>
          </Link>
          <Link to="">
            <a href="">
              <h3 className={navStyle.h3}>О НАС</h3>
            </a>
          </Link>

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
