import { useContext } from "react";
import employeeContext from "../../Context";
function Welcome() {
  const { onLeave, setOnLeave } = useContext(employeeContext);

  return (
    <div className="w-8/12 rounded shadow-md bg-teal-100 p-10 justify-center ">
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
          <div className="grid justify-evenly grid-cols-3 gap-5">
            <p key={emp.id} className="text-xl text-center text-red-800">
              {emp.full_name}
            </p>
            <span className="text-orange-400 text-bolded">nicholasnjeru@gmail.com</span>
            <span>onLeave</span>
          </div>
        </>
      ))}
    </div>
  );
}
export default Welcome;
