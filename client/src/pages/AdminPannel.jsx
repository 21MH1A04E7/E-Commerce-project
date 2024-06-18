import React from "react";
import { useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { Link ,Outlet, useNavigate} from 'react-router-dom';

function AdminPannel() {
  const navigate=useNavigate()
  const user = useSelector((state) => state?.user?.user);
  if(user?.role!=="ADMINE"){
    navigate("/")
    return null;
  }
  return (
    <div className="min-h-[calc(100vh-140px)]  flex">
      <aside className="w-full max-w-60 md:max-w-80  min-h-full shrink-1 boxShadow">
        <div className="h-28 md:h-32 flex flex-col gap-1 justify-center items-center">
          <div className="text-4xl relative flex justify-center items-center">
            {user?.profilepic ? (
              <img
                className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black outline outline-offset-2 outline-3 outline-slate-300"
                src={user?.profilepic}
                alt={user?.username}
              />
            ) : (
              <FaRegUser className="text-[#009432]" />
            )}
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold capitalize">{user?.username}</p>
            <p className="italic">{user?.role}</p>
          </div>
        </div>
        <div>
          <nav className="flex flex-col w-full justify-center items-center">
            <Link to={"/admin-pannel/all-users"}>All Users</Link>
            <Link to={"/admin-pannel/all-products"}>Products</Link>
          </nav>
        </div>
      </aside>
      <main className="w-full h-full shrink-2 p-2">
        <Outlet/>
      </main>
    </div>
  );
}

export default AdminPannel;
