import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Api from "../common/url.js";
import { useContext } from "react";
import AppContext from "../context/index.js";
import { useDispatch,useSelector } from "react-redux";
import {toast } from 'react-toastify';
import {startLogin,loginSuccess} from "../store/userSlice.js"

function Login() {
  const dispatch=useDispatch()
  const {loading}=useSelector((state)=>state.user)

  const navigate=useNavigate()
  const {fetchuserDetails}=useContext(AppContext)

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        dispatch(startLogin())
        const response = await fetch(`${Api.login.url}`, {
        method: Api.login.method,
        credentials:'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const userres = await response.json();
      if (!userres.success) {
        dispatch(loginSuccess())
        toast.error("wrong credential!");
        return 
      }
      fetchuserDetails()
      dispatch(loginSuccess())
      toast.success(userres.message)
      navigate('/')
    } catch (err) {
      dispatch(loginSuccess())
      console.log(err.message);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="container mx-auto">
        <div className="max-w-md bg-white shadow-lg rounded-lg mx-auto p-6">
          <div className="text-center bg-red-500 text-white py-2 rounded-t-lg">
            <p className="text-xl font-semibold">Login</p>
          </div>
          <div className="mt-4">
            <form onSubmit={handleSubmit} id='f'>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Password:
                </label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
                  />
                  <div
                    className="absolute right-3 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <FaEye className="text-lg transition-opacity duration-300 opacity-70 hover:opacity-100" />
                    ) : (
                      <FaEyeSlash className="text-lg transition-opacity duration-300 opacity-70 hover:opacity-100" />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-4 mb-2">
                <Link to="/forgot-password">
                  <p className="hover:underline hover:text-green-500">
                    Forgot password
                  </p>
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-[#70a1ff] text-white py-2 rounded-lg hover:bg-[#0b5aed] focus:outline-none focus:ring-2 focus:ring-[#70a1ff] transition-colors duration-300"
              >
                {loading?"Login...":"Login"}
              </button>
              <div className="mt-2">
                <p className="text-red-500">
                  Don't have an account?{" "}
                  <Link
                    to="/sign-up"
                    className="hover:text-green-500 font-semibold hover:underline"
                  >
                    Sign-up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
