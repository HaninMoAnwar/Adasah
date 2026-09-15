import { useState } from 'react'
import '@fortawesome/fontawesome-free/js/all.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BlogPage from './pages/BlogPage/BlogPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import AboutPage from './pages/AboutPage/AboutPage'

const router = createBrowserRouter([

  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'blog',

        element: <BlogPage />,
      },
      {
        path: 'blog/:slug',
        element: <DetailsPage />,
      },
      {
        path:'about',
        element:<AboutPage />
      }
    ]
  },
  {

    path: '*',
    element: <NotFoundPage />
  }



])
function App() {
  return (
    <>
      <div className="font-sans text-white antialiased">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
