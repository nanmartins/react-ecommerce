// import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products"
import Product from "./Pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/product/:id",
        element:<Product />
      },
      {
        path:"/products/:id",
        element:<Products />
      },
    ]
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
