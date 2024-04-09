import React from 'react';
import { RouterProvider,createBrowserRouter,Route} from 'react-router-dom'
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/about',
          element:<About/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>  
  )
}

export default App
