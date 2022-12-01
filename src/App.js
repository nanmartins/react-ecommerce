// import React from 'react'
import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products"
import Product from "./Pages/Product/Product";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/products/:id",
    element:<Products />
  },
  {
    path:"/product/:id",
    element:<Product />
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
