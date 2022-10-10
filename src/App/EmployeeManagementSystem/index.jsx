import { Outlet } from "react-router-dom";

import NavBar from "./Navbar";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

function EmployeeManagementSystem() {
  return (
    <div className="h-screen  bg-teal-50">
      <NavBar />

      <Outlet />
      <div>
        <TawkMessengerReact
          propertyId="63433ada37898912e96db3e5"
          widgetId="1gev9rq46"
        />
      </div>
    </div>
  );
}

export default EmployeeManagementSystem;
