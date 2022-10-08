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
        email: edit.email,
        department: edit.department,
        salary: edit.salary,
      }),
    })
      .then((res) => res.json())
      .then((data) => alert("details update sucessfull"));
  }

  return (
    <div className="rounded shadow-md bg-teal-100 sm:p-10 justify-center ">
      <p className="text-orange-400 text-xl mb-2">
        You can Edit employee's details here,, once done click save
      </p>
      <div className="grid sm:grid-cols-4 sm:gap-1 pt-6 px-4 pb-6 px-auto">
        <label className="text-center text-black">Full Names</label>
        <input
          name="full_name"
          onChange={(e) => handlechange(e)}
          value={oneEmployee.full_name}
          className="bg-fuchsia-400 text-black rounded shadow-md h-28 pt-2 text-center"
        />

        <label className="text-center">Department</label>
        <input
          onChange={(e) => handlechange(e)}
          name="department"
          value={oneEmployee.department}
          className="bg-blue-400 text-black rounded shadow-md h-28 pt-4 text-center"
        />

        <label className="text-center">Email</label>

        <input
          onChange={(e) => handlechange(e)}
          name="email"
          value={oneEmployee.email}
          className="bg-yellow-400 rounded shadow-md h-28 pt-4 text-center"
        />
        <label className="text-center">Salary</label>

        <input
          onChange={(e) => handlechange(e)}
          name="salary"
          value={oneEmployee.salary}
          className="bg-orange-400 rounded shadow-md h-28 pt-4 text-center"
        />
      </div>
      <div className="grid sm:grid-col-2 p-8 p-auto">
        <button
          onClick={(e) => handleSave(e)}
          className="bg-sky-600 text-zinc-50 w-28 rounded shadow-2xl mb-4 px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          Save
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-sky-300 float-right text-zinc-50 w-28 rounded shadow-2xl py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 duration-300">
          back
        </button>
      </div>
    </div>
  );
}
export default SingleEmployee;
