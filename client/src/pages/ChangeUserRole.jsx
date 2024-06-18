import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import Api from "../common/url.js";
import { toast } from "react-toastify";
function ChangeUserRole({ name, email, role, onClose,userId,onCall }) {
  const [userRole, setUserRole] = useState(role);
  const updateUser = async () => {
    try {
      const data = await fetch(`${Api.UpdateUserByAdmine.url}`, {
        method: `${Api.UpdateUserByAdmine.method}`,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: userRole,
          userId:userId
        }),
      });
      const result = await data.json();
      if(result.success){
        toast.success(result.message)
        onCall()
      }
      else{
        toast.error(result.message)
      } 
      onClose(false)
    } catch (err) {
      console.log(err.message);
      toast.error(err.message)
      onClose(false)
    }
  };

  return (
    <div className="fixed h-full w-full top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center bg-gray-200 bg-opacity-80 ">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <VscChromeClose className="text-lg font-bold hover:bg-red-600 hover:text-white rounded-md cursor-pointer active:opacity-85" onClick={()=>onClose(false)}/>
        </div>
        <h1 className="font-bold text-lg mb-4 text-center">Change User Role</h1>
        <div className="mb-4">
          <p className="font-medium">
            Name: <span className="font-normal">{name}</span>
          </p>
          <p className="font-medium">
            Email: <span className="font-normal">{email}</span>
          </p>
        </div>
        <div className="mb-4 flex items-center gap-4">
          <label htmlFor="role" className="font-medium">
            Role:
          </label>
          <select
            id="role"
            className="p-1 border border-gray-300 rounded-md"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value="ADMINE">ADMINE</option>
            <option value="GENERAL">GENERAL</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-3"
            onClick={updateUser}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeUserRole;
