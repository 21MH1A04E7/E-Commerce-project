import { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import ImageTobase64 from "../solver/Tobase64";
import Api from "../common/url.js"

function SignUp() {
  const navigate=useNavigate()
  const elementref = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmpassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
    confirmpassword: "",
    profilepic: "",
  });

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const imageUrl = await ImageTobase64(file);
    console.log(imageUrl);
    setData({
      ...data,
      profilepic: imageUrl,
    });
  };
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await fetch(`${Api.signUp.url}`, {
        method:Api.signUp.method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    
    const userres=await response.json()
    if(!userres.success){
      alert(userres.message)
      return
    }
    navigate('/login')
    }catch(err){
      alert(err.message)
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="container mx-auto">
        <div className="max-w-md bg-white shadow-lg rounded-lg mx-auto p-6">
          <div className="text-center bg-[#79f0f0] text-white py-2 rounded-t-lg">
            <div className="relative">
              <div onClick={() => elementref.current.click()} className="flex justify-center">
                {data.profilepic ? (
                  <img src={data.profilepic} className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] rounded-full cursor-pointer bg-cover border-[3px] border-gray-500"></img>
                ) : (
                  <FaRegUserCircle className="text-4xl mx-auto sm:text-5xl cursor-pointer text-gray-500 hover:text-green-500" />
                )}
              </div>
              <p className="sm:text-lg text:sm text-black italic">
                upload image
              </p>
              <input
                type="file"
                onChange={handleUpload}
                ref={elementref}
                className="hidden"
              />
            </div>
          </div>
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  UserName:
                </label>
                <input
                  type="text"
                  id="username"
                  value={data.username}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
                />
              </div>
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
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Confirm Password:
                </label>
                <div className="relative flex items-center">
                  <input
                    type={showconfirmpassword ? "text" : "password"}
                    id="confirmpassword"
                    value={data.confirmpassword}
                    onChange={handleChange}
                    placeholder="Enter corfirm password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
                  />
                  <div
                    className="absolute right-3 cursor-pointer text-gray-500"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showconfirmpassword ? (
                      <FaEye className="text-lg transition-opacity duration-300 opacity-70 hover:opacity-100" />
                    ) : (
                      <FaEyeSlash className="text-lg transition-opacity duration-300 opacity-70 hover:opacity-100" />
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#70a1ff] text-white py-2 rounded-lg hover:bg-[#0b5aed] focus:outline-none focus:ring-2 focus:ring-[#70a1ff] transition-colors duration-300"
              >
                SignUp
              </button>
              <div className="mt-2">
                <p className="text-green-500">
                  have an account?{" "}
                  <Link
                    to="/login"
                    className="hover:text-green-500 font-semibold hover:underline text-[#0b5aed]"
                  >
                    Login
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

export default SignUp;
