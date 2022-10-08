import { Outlet } from "react-router-dom";

import NavBar from "./Navbar";

function EmployeeManagementSystem() {
  
  return (
    <div className="h-screen  bg-teal-50">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default EmployeeManagementSystem;
