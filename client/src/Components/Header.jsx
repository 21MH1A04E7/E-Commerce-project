import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearchHeart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setuserDetails } from "../store/userSlice.js";
import Api from "../common/url.js";

function Header() {
  const [showDisplay, setshowDisplay] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  // console.log(user)
  const handlelogout = async () => {
    try {
      const response = await fetch(`${Api.logout.url}`, {
        method: Api.logout.method,
        credentials: "include",
      });
      const userres = await response.json();
      // console.log(userres)
      if (userres.success) {
        dispatch(setuserDetails([]));
        alert(userres.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header className="bg-[#c2ecef] shadow-lg h-16 fixed top-0 w-full z-[100]">
      <div className="container mx-auto flex items-center h-full justify-between px-2 sm:px-8">
        <Link to="/">
          <div className="cursor-pointer flex flex-nowrap">
            <span className="text-green-500 text-sm font-bold sm:text-lg ">
              E
            </span>
            <span className="text-red-800 sm:font-extrabold sm:text-lg">-</span>
            <span className="text-[#e82ed5] text-sm font-bold italic sm:text-lg">
              Commerce
            </span>
          </div>
        </Link>
        <div className="hidden sm:flex items-center h-10 bg-slate-300 rounded-full w-60 justify-between lg:w-[400px] hover:shadow-md mx-auto max-w-xl">
          <input
            type="text"
            placeholder="search..."
            className="h-full w-full outline-none px-2 rounded-l-full"
          ></input>
          <div className="bg-[#32cc1a] w-12 h-full rounded-r-full flex items-center justify-center text-white cursor-pointer hover:bg-red-500 lg:w-16 active:opacity-25">
            <BsSearchHeart />
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-5">
          <div className="relative flex justify-center">
            <div className="text-3xl relative flex justify-center items-center cursor-pointer" onClick={()=>setshowDisplay((pre)=>!pre)}>
              {user?.profilepic ? (
                <img
                  className="w-10 h-10 rounded-full bg-black outline-dotted outline-2 outline-red-300"
                  src={user?.profilepic}
                  alt={user?.username}
                />
              ) : (
                <FaRegUser className="text-[#009432]" />
              )}
            </div>
            {showDisplay ? (
              <div className="absolute bottom-0 top-12 h-fit bg-[#ecf0f1] p-2 shadow-lg rounded-b-md hover:bg-slate-300 cursor-pointer">
                <nav>
                  <Link to={"/admin-pannel"}>
                    <div className="text-[#080a0c] italic sm:whitespace-nowrap ">
                      admin pannel
                    </div>
                  </Link>
                </nav>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="text-3xl relative">
            <span>
              <BsCartFill className="text-[#833471]" />
            </span>
            <div className="bg-[#2124dc] rounded-full flex items-center justify-center w-5 h-5 absolute -top-1 -right-2 ">
              <p className="text-sm text-white font-semibold">0</p>
            </div>
          </div>
          <div>
            {user?.email ? (
              <Link>
                <button
                  className="bg-[#3f44e0] px-3 py-1 rounded-lg text-white  transition-transform transform-gpu hover:scale-105 active:opacity-70 lg:px-4"
                  style={{
                    transition: "transform 0.3s ease",
                  }}
                  onClick={handlelogout}
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  className="bg-[#3f44e0] px-3 py-1 rounded-lg text-white  transition-transform transform-gpu hover:scale-105 active:opacity-70 lg:px-4"
                  style={{
                    transition: "transform 0.3s ease",
                  }}
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
