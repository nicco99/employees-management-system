import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import employeeContext from "../../Context";
function Form() {
  const [employeeData, setEmployeeData] = useState({});
  const navigate = useNavigate();
  const { setRerender, rerender } = useContext(employeeContext);

  function handleAdd(e) {
    const value = e.target.value;
    const name = e.target.name;
    setEmployeeData({ ...employeeData, [name]: value });
    console.log(employeeData);
  }
  function handleNewEmployee() {
    fetch("http://localhost:3000/employees", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(employeeData),
    })
      .then((res) => res.json())
      .then((data) => setRerender((rerender = !rerender)));
    navigate("/dashboard/view");
  }
  return (
    <div className="w-8/12 rounded shadow-md bg-teal-100 p-10 justify-center">
      <h1 className="text-4xl text-center text-orange-400 mb-8">
        New Employee ✍🏾✍🏾
      </h1>
      <form className="bg-teal-50 shadow-md place-self-center  rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Full Name:
          </label>
          <input
            onChange={(e) => handleAdd(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="full_name"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Department:
          </label>
          <input
            onChange={(e) => handleAdd(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="department"
            placeholder="department Name"
          />
        </div>
        <div class="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            salary:
          </label>
          <input
            onChange={(e) => handleAdd(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="salary"
            placeholder="salary"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleNewEmployee}
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
