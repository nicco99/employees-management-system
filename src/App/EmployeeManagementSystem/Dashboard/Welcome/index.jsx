import { useContext } from "react";
import employeeContext from "../../Context";
function Welcome() {
  const { onLeave } = useContext(employeeContext);

  return (
    <div className="rounded shadow-md bg-teal-100 sm:p-10 justify-center">
      <h1 className="text-4xl text-center text-orange-400 mb-8">
        Welcome Admin we are happy for you{" "}
      </h1>
      <p className="text-xl text-center text-blue-800">
        {" "}
        Help us manage employees for good performance
      </p>
      <h1 className="text-center p-4">Notifications🔔🔔</h1>
      {onLeave.map((emp) => (
        <>
          <div className="grid justify-evenly sm:grid-cols-3 sm:gap-5">
            <p key={emp.id} className="text-xl text-center text-red-800">
              {emp.full_name}
            </p>
            <span className="text-orange-400 text-bolded">
              {emp.email}
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </span>
            <span className="text-center">onLeave</span>
          </div>
          <hr className="sm:hidden border-red-200"></hr>
        </>
      ))}
    </div>
  );
}
export default Welcome;
