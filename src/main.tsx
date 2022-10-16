import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contact, loader as contactLoader } from './routes/Contact'
import { EditContact } from './routes/EditContact'
import { Index } from './routes/Index'
import { Root, loader as rootLoader, action as rootAction } from './routes/Root'
import './scss/style.scss'

const router = createBrowserRouter([
  {
    path: '/',
    loader: rootLoader,
    action: rootAction,
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      {
        path: '/contacts/:contactId',
        loader: contactLoader,
        element: <Contact />,
      },
      { path: '/contacts/:contactId/edit', element: <EditContact /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
