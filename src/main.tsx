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
import About from './pages/about/About.tsx'
import Chefs from './pages/chefs/Chefs.tsx'
import RecipeDetails from './pages/recipe-details/RecipeDetails.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About />},
      { path: 'chefs', element: <Chefs />},
      { path: 'profile', element: <Profile />},
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register />},
      { path: 'create-recipe', element: <CreateRecipe /> },
      { path: 'dashboard', element: <Dashboard />},
      { path: 'recipe/:id', element: <RecipeDetails />}
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
