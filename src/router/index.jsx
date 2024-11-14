import Home from '../pages/home'
import Detail from '../pages/detail'
import Add from '../pages/add'

import { useRoutes } from 'react-router-dom';

const routerConfig = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/add',
    element: <Add />
  }
]

const Router = () => {
  return useRoutes(routerConfig)
}
export default Router