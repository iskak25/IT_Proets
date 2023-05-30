import HomePages from './pages/Home/HomePages/HomePages'
import { Route, Routes } from 'react-router-dom'
import Loginpages from 'pages/Login/LoginPages'
import Register from 'compoment/Auth/Register/Register'
import AboutUs from 'compoment/AboutUs/AboutUs'
import Profile from 'compoment/Profile/Profile'
import Project from 'compoment/Project/Project'
import Admin from 'compoment/Admin/Admin'
import Contacts from 'compoment/Contacts/Contacts'

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
    {
      link: '/aboutUs',
      element: <AboutUs />,
      id: 4,
    },
    {
      link: '/profil',
      element: <Profile />,
      id: 5,
    },
    {
      link: '/project',
      element: <Project />,
      id: 6,
    },
    {
      link: '/admin',
      element: <Admin />,
      id: 6,
    },
    {
      link: '/сontacts',
      element: <Contacts />,
      id: 6,
    },
    Contacts,
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
