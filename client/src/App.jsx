import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import AdminPannel from "./pages/AdminPannel.jsx";
import Api from "./common/url.js";
import AppContext from "./context/index.js";
import { useSelector, useDispatch } from "react-redux";
import { setuserDetails } from "./store/userSlice.js";
import AllUsers from "./pages/AllUsers.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import CategoryProductOne from "./pages/CategoryProductOne.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Card from "./pages/Card.jsx";

function App() {
  const [cartProductCount, setCartProductCount] = useState(0);

  const dispatch = useDispatch();
  const fetchuserDetails = async () => {
    const response = await fetch(`${Api.userDetails.url}`, {
      method: Api.userDetails.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const userdata = await response.json();
    if (userdata.success) {
      dispatch(setuserDetails(userdata.data));
    }
  };
  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(Api.GetProuductCount.url, {
      method: Api.GetProuductCount.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();
    console.log(dataApi);
    setCartProductCount(dataApi?.data?.count);
  };

  useEffect(() => {
    fetchuserDetails();
    fetchUserAddToCart();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/category-product/:categoryName",
          element: <CategoryProductOne />,
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,
        },
        {
          path:"/card",
          element:<Card/>
        },
        {
          path: "/admin-pannel",
          element: <AdminPannel />,
          children: [
            {
              path: "all-users",
              element: <AllUsers />,
            },
            {
              path: "all-products",
              element: <AllProducts />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        fetchuserDetails, //providing to fectchuserDetails funtion though the conext
        cartProductCount,
        fetchUserAddToCart // providing cartProductCount to fectchuserDetails funtion though the conext
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
