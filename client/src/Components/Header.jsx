import React from "react";
import { Link } from "react-router-dom";
import { BsSearchHeart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
function Header() {
  return (
    <header className="bg-[#dff9fb] shadow-lg h-16">
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
          <div className="bg-[#3adb21] w-12 h-full rounded-r-full flex items-center justify-center text-white cursor-pointer hover:bg-red-500 lg:w-16 active:opacity-25">
            <BsSearchHeart />
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-5">
          <div className="text-3xl">
            <FaRegUser className="text-[#009432]" />
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
