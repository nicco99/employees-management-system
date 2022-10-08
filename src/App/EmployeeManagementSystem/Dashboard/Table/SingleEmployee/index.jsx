import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
function SingleEmployee() {
  const empId = useParams();

  const [oneEmployee, setOneEmployee] = useState({});
  const [edit, setEdit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/employees/${empId.id}`)
      .then((res) => res.json())
      .then((data) => setOneEmployee((oneEmployee) => data));
  }, []);
  function handlechange(e) {
    setOneEmployee({});
    const value = e.target.value;
    const name = e.target.name;
    setEdit({ ...edit, [name]: value });
  }
  function handleSave() {
    fetch(`http://localhost:3000/employees/${empId.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        full_name: edit.full_name,
        department: edit.department,
        salary: edit.salary,
      }),
    })
      .then((res) => res.json())
      .then((data) => alert("details update sucessfull"));
  }

  return (
    <div className="w-8/12 flex flex-col justify-evenly rounded shadow-md bg-teal-100 p-11">
      <p className="text-orange-400 text-xl mb-2">
        You can Edit employee's details here,, once done click save
      </p>
      <div className="grid grid-cols-3 gap-5 pt-6 px-4">
        <label className="text-center text-lime-600">
          Full Names
          <input
            name="full_name"
            onChange={(e) => handlechange(e)}
            value={oneEmployee.full_name}
            className="bg-fuchsia-300 text-red-500 rounded shadow-md h-28 pt-2 text-center"
          />
        </label>
        <label className="text-center">
          Department
          <input
            onChange={(e) => handlechange(e)}
            name="department"
            value={oneEmployee.department}
            className="bg-blue-800 text-slate-50 rounded shadow-md h-28 pt-4 text-center"
          />
        </label>
        <label className="text-center">
          Salary
          <input
            onChange={(e) => handlechange(e)}
            name="salary"
            value={oneEmployee.salary}
            className="bg-blue-300 rounded shadow-md h-28 pt-4 text-center"
          />
        </label>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-sky-300 float-right text-zinc-50 w-28 rounded shadow-2xl px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 duration-300">
          back
        </button>
        <button
          onClick={(e) => handleSave(e)}
          className="bg-sky-600 text-zinc-50 w-28 rounded shadow-2xl px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          Save
        </button>
      </div>
    </div>
  );
}
export default SingleEmployee;
