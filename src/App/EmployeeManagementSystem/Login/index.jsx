import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ isLoggedIn, setIsLoggedIn }) {
  const redirect = useNavigate();
  const [inputData, setInputData] = useState({});
  const [loginInfo, setLoginInfo] = useState({});
  const [error, setError] = useState(true);

  // console.log(inputData)
  useEffect(() => {
    fetch("http://localhost:3000/admins")
      .then((res) => res.json())
      .then((data) => setLoginInfo((loginInfo) => data[0]))
      .catch((e) => console.log(e.message));
  }, []);

  //handle input
  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setInputData({ ...inputData, [name]: value });
  }
  function validateUser() {
    if (
      inputData.username === loginInfo.username &&
      inputData.password === loginInfo.password
    ) {
      setIsLoggedIn((isLoggedIn) => true);

      redirect("/dashboard");
    } else {
      handleError();
    }
  }
  function handleError() {
    setError((error) => !error);
  }
  // page === "About" ? "green" : "",
  return (
    <div className="bg-teal-50 grid sm:grid-cols-1">
      <p
        style={{ display: error ? "none" : "block" }}
        className="bg-red-100 h-11 text-center rounded-lg shadow-md container mx-auto">
        please fill in correct credentials
        <span
          onClick={handleError}
          className="float-right p-4 font-bolded text-sky-800">
          X
        </span>
      </p>
      <div className="lg:w-2/4 w-full  m-auto mt-14">
        <form className="bg-teal-50 shadow-md place-self-center rounded px-8 pt-6 pb-8 mb-4">
          <div>
            <svg
              class="w-16 bg-white p-4 rounded-full items-center m-auto h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <p className="text-center  rounded-full text-4xl">Admin</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={validateUser}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button">
              Sign-In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
