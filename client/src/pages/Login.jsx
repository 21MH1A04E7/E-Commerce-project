import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="container mx-auto">
        <div className="max-w-md bg-white shadow-lg rounded-lg mx-auto p-6">
          <div className="text-center bg-red-500 text-white py-2 rounded-t-lg">
            <p className="text-xl font-semibold">Login</p>
          </div>
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
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
                Login
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
