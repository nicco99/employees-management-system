import React, { useContext } from "react";
import employeeContext from "../../../Context";
import { Link, useNavigate } from "react-router-dom";

function Tr({ emp }) {
  const { rerender, setRerender } = useContext(employeeContext);
  const redirect = useNavigate();
  function handleDelete(emp) {
    
    fetch(`http://localhost:3000/employees/${emp.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setRerender((rerender) => !rerender));
  }
  return (
    <tr>
      <td className="p-2">
        <div className="cursor-pointer font-medium text-gray-800">
          <Link to={`${emp.id}`}>{emp.full_name}</Link>
        </div>
      </td>
      <td className="p-2">
        <div className="text-left">{emp.department}</div>
      </td>
      <td className="p-2">
        <div className="text-left font-medium text-green-500">{emp.salary}</div>
      </td>
      <td className="p-2">
        <div className="flex justify-center">
          <button onClick={() => handleDelete(emp)} className="text-red-800">
            Unemploy
          </button>
        </div>
      </td>
    </tr>
  );
}
export default Tr;
