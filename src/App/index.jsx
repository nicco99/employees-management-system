import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./EmployeeManagementSystem/Login";
import Dashboard from "./EmployeeManagementSystem/Dashboard";
import Table from "./EmployeeManagementSystem/Dashboard/Table";
import Form from "./EmployeeManagementSystem/Dashboard/Form";
import EmployeeManagementSystem from "./EmployeeManagementSystem";
import SingleEmployee from "./EmployeeManagementSystem/Dashboard/Table/SingleEmployee";
import { useState, useEffect } from "react";
import Welcome from "./EmployeeManagementSystem/Dashboard/Welcome";
import ManageLeave from "./EmployeeManagementSystem/Dashboard/ManageLeave";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => console.log(data[0].islogged));
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<EmployeeManagementSystem />}>
          <Route
            path=""
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="dashboard"
            element={
              <Dashboard />
              // isLoggedIn ?
              // <Dashboard setIsLoggedIn={setIsLoggedIn} />
              //  :
              // <h1>please login</h1>
            }>
            <Route path="" element={<Welcome />} />
            <Route path="leave" element={<ManageLeave />} />                     
            <Route path="add" element={<Form />} />
            <Route path="edit" element={<Form />} />
            <Route path="view">
              <Route index element={<Table />} />
              <Route path=":id" element={<SingleEmployee />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
