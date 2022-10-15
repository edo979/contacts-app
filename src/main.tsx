import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root, loader as rootLoader, action as rootAction } from './routes/Root'
import './scss/style.scss'

const router = createBrowserRouter([
  {
    path: '/',
    loader: rootLoader,
    action: rootAction,
    element: <Root />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
