import HomePages from './pages/Home/HomePages/HomePages'
import { Route, Routes } from 'react-router-dom'
import Loginpages from 'pages/Login/LoginPages'
import Register from 'compoment/Register/Register'

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: '/',
      element: <HomePages />,
      id: 1,
    },
    {
      link: '/login',
      element: <Loginpages />,
      id: 2,
    },
    {
      link: '/register',
      element: <Register />,
      id: 3,
    },
  ]
  // console.log('asdfg')
  const PRIVATE_ROUTES = [
    {
      link: '/admin',
      // element: <AdminPage />,
      id: 1,
    },
    {
      link: '/edit/:id',
      // element: <EditProductPage />,
      id: 2,
    },
  ]

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} key={item.id} element={item.element} />
        ))}

        {/* {user
           ? PRIVATE_ROUTES.map((item) => (
               <Route
                 path={item.link}
                 element={
                   user.email === ADMIN ? (
                     item.element
                   ) : (
                     <Navigate replace to="*" />
                   )
                 }
               />
             ))
           : null} */}
      </Routes>
    </>
  )
}

export default MainRoutes
