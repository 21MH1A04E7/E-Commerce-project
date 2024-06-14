import React, { useEffect, useState } from "react";
import Api from "../common/url.js";
import moment from 'moment'
import { FaEdit } from 'react-icons/fa';
import { toast } from "react-toastify";

function AllUsers() {
  const [userdata, setUserdata] = useState([]);
  const [Searchfilter,setSearchfilter]=useState("")
  const fetAlluser = async () => {
    const data = await fetch(Api.GetAlluser.url, {
      method: Api.GetAlluser.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const userdata = await data.json();
    console.log(userdata);
    setUserdata(userdata);
  };
  useEffect(() => {
    fetAlluser();
  }, []);
  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Users</h1>
        <form>
          <input
            type="text"
            placeholder="Search by name"
            value={Searchfilter}
            onChange={(e)=>setSearchfilter(e.target.value)}
            className="px-3 py-2 border-2 border-blue-300 rounded-lg "
          />
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-3 text-left">Sr.No</th>
              <th className="py-3 px-3 text-left">Name</th>
              <th className="py-3 px-3 text-left">Email</th>
              <th className="py-3 px-3 text-left">Role</th>
              <th className="py-3 px-3 text-left">Created Date</th>
              <th className="py-3 px-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userdata.filter((item)=>{
              return Searchfilter==""?item:item.username.toLowerCase().includes(Searchfilter.toLowerCase())
            }).map((user, index) => (
              <tr
                key={user.email}
                className={`border-b border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-300`}
              >
                <td className="py-3 px-3">{index + 1}</td>
                <td className="py-3 px-3">{user.username}</td>
                <td className="py-3 px-3">{user.email}</td>
                <td className="py-3 px-3">{user.role}</td>
                <td className="py-3 px-3">{moment(user.createdAt).format('ll')}</td>
                <td className="py-3 px-3">
                  <button className="text-green-400 hover:text-pink-400 text-xl">
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
