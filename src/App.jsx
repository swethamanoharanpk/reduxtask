import React from 'react'
import Product from './pages/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Order from './pages/Order';
import Cart from './pages/Cart';

function App() {
  const abc = createBrowserRouter([
    {path:'/',
      element:<Product/>
    },
    {path:'/order',
      element:<Order/>
    },
    {path:'/cart',
      element:<Cart/>
    }
  ])
  return (
    <div>
    <RouterProvider router={abc}></RouterProvider>
    </div>
  )
}

export default App