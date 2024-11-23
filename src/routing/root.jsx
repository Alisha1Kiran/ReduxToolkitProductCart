import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Cart from '../components/Cart'
import Dashboard from '../components/Dashboard'
import NavBar from '../components/NavBar'
import Navigation from '../components/Navigation'

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
    </Route>
    )
)

const root = () => {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default root