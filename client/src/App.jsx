import React, { useEffect } from 'react';
import { RouterProvider,createBrowserRouter,Route} from 'react-router-dom'
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import Api from './common/url.js'
import AppContext from './context/index.js';
function App() {

  const fetchuserDetails=async()=>{
    const response=await fetch(`${Api.userDetails.url}`,{
      method:Api.userDetails.method,
      credentials:'include',
      headers:{
        "Content-Type":"application/json"
      }
    })
    const userdata=await response.json()
    // console.log("user",userdata)
  }
  useEffect(()=>{
    fetchuserDetails()
  },[])

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
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/forgot-password',
          element:<ForgotPassword/>
        },
        {
          path:'/sign-up',
          element:<SignUp/>
        }
      ]
    }
  ])

  return (
    <AppContext.Provider value={{
      fetchuserDetails//providing to fectchuserDetails funtion though the conext
    }}>
      <RouterProvider router={router}/>
    </AppContext.Provider> 
  )
}

export default App
