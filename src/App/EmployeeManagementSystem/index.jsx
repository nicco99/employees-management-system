import { Outlet } from "react-router-dom";
import Login from "./Login";

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
