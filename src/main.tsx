import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Home from './pages/home/Home.tsx'
import Login from './pages/login/Login.tsx'
import Register from './pages/register/Register.tsx'

import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import Profile from './pages/profile/Profile.tsx'
import CreateRecipe from './pages/create-recipe/CreateRecipe.tsx'
import Dashboard from './pages/dashboard/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'profile', element: <Profile />},
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register />},
      { path: 'create-recipe', element: <CreateRecipe /> },
      { path: 'dashboard', element: <Dashboard />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
