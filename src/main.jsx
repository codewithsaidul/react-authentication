import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Main } from './layout/Main.jsx'
import { Home } from './components/Home.jsx'


const router = new createBrowserRouter (
  [
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path:'/',
          element: <Home/>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
