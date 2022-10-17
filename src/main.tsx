import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './routes/ErrorPage'
import {
  Contact,
  loader as contactLoader,
  action as contactAction,
} from './routes/Contact'
import { EditContact, action as editAction } from './routes/EditContact'
import { Index } from './routes/Index'
import { Root, loader as rootLoader, action as rootAction } from './routes/Root'
import { action as deleteAction } from './routes/Destroy'
import './scss/style.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/contacts/:contactId',
            loader: contactLoader,
            action: contactAction,
            element: <Contact />,
          },
          {
            path: '/contacts/:contactId/edit',
            loader: contactLoader,
            action: editAction,
            element: <EditContact />,
          },
          {
            path: 'contacts/:contactId/destroy',
            action: deleteAction,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
