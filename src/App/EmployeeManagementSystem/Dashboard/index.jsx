import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Outlet } from "react-router-dom";
import employeeContext from "../Context";
import { useState } from "react";
function Dashboard({ setIsLoggedIn }) {
  const [rerender, setRerender] = useState(true);
  return (
    <employeeContext.Provider
      value={{ rerender: rerender, setRerender: setRerender }}>
      <div className="bg-teal-50 w-screen p-10 ">
        <Logout setIsLoggedIn={setIsLoggedIn} />
        <div className="bg-teal-100 shadow-md rounded-md text-orange-400 w-1/4 p-4 mb-4 text-center">
          welcome admin
        </div>
        <div className="flex flex-row mb-7">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </employeeContext.Provider>
  );
}

export default Dashboard;
