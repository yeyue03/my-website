import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import Layouts from '../layouts';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layouts,
    children: [
      {
        path: '/home',
        Component: lazy(() => import('../views/article'))
      },
      {
        path: '/write',
        Component: lazy(() => import('../views/article/write'))
      },
      {
        path: '/about',
        Component: lazy(() => import('../views/about'))
      },
      {
        path: '/tictactoe',
        Component: lazy(() => import('../views/game/tictactoe'))
      },
      {
        path: '/',
        element: <Navigate to="/home" />
      }
    ]
  },
  {
    path: '*',
    Component: lazy(() => import('../views/notFound'))
  },
])

export default router;