import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Outlet } from "react-router-dom";
import employeeContext from "../Context";
import { useState, useEffect } from "react";
function Dashboard({ setIsLoggedIn }) {
  const [rerender, setRerender] = useState(true);
  const [onLeave, setOnLeave] = useState([]);
  const [update, setUpdate] = useState(true);
  const [true1, setTrue] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/leave")
      .then((res) => res.json())
      .then((data) => setOnLeave((onLeave) => data));
  }, [update]);

  let toggle = "hidden sm:block sm:cols-span-1";
  let toggle2 = "sm:cols-span-1";

  function handleToggle() {
    setTrue((true1) => !true1);
  }

  return (
    <employeeContext.Provider
      value={{
        rerender: rerender,
        setRerender: setRerender,
        onLeave: onLeave,
        setOnLeave: setOnLeave,
        update: update,
        setUpdate: setUpdate,
      }}>
      <div className="bg-teal-50 sm:w-screen grid sm:grid-col-2 h-auto m-auto p-auto sm:p-8 ">
        <button
          onClick={handleToggle}
          className="sm:hidden shadow w-14 mb-4 h-12 border-emerald-100 float-right p-4 p-auto bg-teal-100">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
       

        <div className="bg-teal-100 shadow-md rounded-md text-orange-400 sm:w-1/4 p-4 mb-4 text-center">
          welcome admin
        </div>
        <div>
          <Logout setIsLoggedIn={setIsLoggedIn} />
        </div>
        <div className="grid sm:grid-cols-4 mb-7 w-full gap-4">
          <div className={true1 ? toggle2 : toggle}>
            <Sidebar />
          </div>
          <div className="sm:col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </employeeContext.Provider>
  );
}

export default Dashboard;
