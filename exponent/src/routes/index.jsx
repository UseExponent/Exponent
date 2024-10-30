import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/Default'
import Home from './pages/Home'
import Table from './pages/Table'
import Main from './pages/Main'
import Object from './pages/Object'
import Search from './pages/Search'
import User from './pages/User'
import NotFound from './pages/Notfound'
import LongObject from './pages/subPages/LongObject'
import Discovery from './pages/subPages/Discovery'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/Main',
        element: <Main />
      },
      {
        path: '/Table',
        element: <Table />
      },
      {
        path: '/Object',
        element: <Object />
      },
      {
        path: '/Search',
        element: <Search />
      },
      {
        path: '/User',
        element: <User />
      },
      {
        path: '/Object/LongObject',
        element: <LongObject />
      },
      {
        path: '/Search/Discovery',
        element: <Discovery />
      },
      {
        path: '/*',
        element: <NotFound />
      }
    ]
  },
  {
    path: '/',
    element: <Home />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}