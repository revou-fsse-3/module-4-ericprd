import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from 'routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LayoutProvider } from 'components'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <RouterProvider router={routes} />
      </LayoutProvider>
      <ToastContainer autoClose={1500} />
    </QueryClientProvider>
  </React.StrictMode>
)
