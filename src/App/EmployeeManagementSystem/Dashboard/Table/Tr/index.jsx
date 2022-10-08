import React, { useContext } from "react";
import employeeContext from "../../../Context";
import { Link } from "react-router-dom";

function Tr({ emp }) {
  const { rerender, setRerender } = useContext(employeeContext);

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
          <button
            onClick={() => handleDelete(emp)}
            className="text-red-500 sm:p-4 hover:bg-teal-50 rounded-full">
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
export default Tr;
