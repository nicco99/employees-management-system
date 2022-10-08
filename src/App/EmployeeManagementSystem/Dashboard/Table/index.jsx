import { useContext, useEffect, useState } from "react";
import Tr from "./Tr";
import employeeContext from "../../Context";
function Table() {
  let [employees, setEmployees] = useState([]);
  const { rerender } = useContext(employeeContext);
  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((res) => res.json())
      .then((data) => setEmployees((employees) => data));
  }, [rerender]);

  console.log(employees);

  let listOfEmployees = employees.map((emp) => <Tr key={emp.id} emp={emp} />);
  return (
    <div className="rounded shadow-md bg-teal-100 sm:p-1 mb-8">
      <p className="text-orange-400 sm:text-xl mb-8">
        Click employee's name for more details
      </p>
      <table className="table-auto sm:w-full">
        <thead className="text-xs font-semibold uppercase text-blue-800 rounded-md bg-gray-50">
          <tr>
            <th className="p-2">
              <div className="font-bold text-left">Employee Name</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-left">department</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-left">salary</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Action</div>
            </th>
          </tr>
        </thead>

        <tbody className="text-sm divide-y divide-gray-100">
          {listOfEmployees}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
