import React, { Component, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';

import Layouts from './layouts';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layouts,
    children: [
      {
        path: '/about',
        Component: lazy(() => import('./views/about'))
      },
      {
        path: '/tictactoe',
        Component: lazy(() => import('./views/game/tictactoe'))
      },
      {
        path: '/',
        element: <Navigate to="/about" />
      }
    ]
  },
  {
    path: '*',
    Component: lazy(() => import('./views/notFound'))
  },
])

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    );
  }
}

export default App;
