import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearchHeart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setuserDetails } from "../store/userSlice.js";
import { toast } from "react-toastify";
import Api from "../common/url.js";
import AppContext from "../context/index.js";

function Header() {
  const [showDisplay, setshowDisplay] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  const context = useContext(AppContext);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const searchInput=useLocation()
  const [search,SetSearch]=useState(searchInput?.search?.split("=")[1])

  console.log("search input",searchInput?.search.split("=")[1])

  const handlelogout = async () => {
    try {
      const response = await fetch(`${Api.logout.url}`, {
        method: Api.logout.method,
        credentials: "include",
      });
      const userres = await response.json();
      if (userres.success) {
        dispatch(setuserDetails([]));
        toast.success(userres.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handdleSearch=(e)=>{
    const {value}=e.target
    SetSearch(value)
    if(value){
      navigate(`/search?q=${value}`)
    }else{
      navigate('/search')
    }

  }
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
            value={search}
            className="h-full w-full outline-none px-2 rounded-l-full"
            onChange={handdleSearch}
          ></input>
          <div className="bg-[#32cc1a] w-12 h-full rounded-r-full flex items-center justify-center text-white cursor-pointer hover:bg-red-500 lg:w-16 active:opacity-25">
            <BsSearchHeart />
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-5">
          <div className="relative flex justify-center">
            {user?._id && (
              <div
                className="text-3xl relative flex justify-center items-center cursor-pointer"
                onClick={() => setshowDisplay((pre) => !pre)}
              >
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
            )}
            {showDisplay && (
              <div className="absolute bottom-0 top-12 h-fit bg-[#ecf0f1] p-2 shadow-lg rounded-b-md hover:bg-slate-300 cursor-pointer ">
                <nav>
                  {user?.role === "ADMINE" && (
                    <Link to={"/admin-pannel/all-products"}>
                      <div
                        className="text-[#080a0c] italic sm:whitespace-nowrap "
                        onClick={() => setshowDisplay((pre) => !pre)}
                      >
                        admin pannel
                      </div>
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>
          {user?._id && (
          <Link to={"/card"} className="text-3xl relative">
            <span>
              <BsCartFill className="text-[#833471]" />
            </span>
              <div className="bg-[#2124dc] rounded-full flex items-center justify-center w-5 h-5 absolute -top-1 -right-2 ">
                <p className="text-sm text-white font-semibold">
                  {context.cartProductCount}
                </p>
              </div>
          </Link>
           )}
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
