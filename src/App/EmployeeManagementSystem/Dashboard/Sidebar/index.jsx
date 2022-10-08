import { useNavigate } from "react-router-dom";

function Sidebar() {
  let redirect = useNavigate();
  let link =
    "border-solid  border-2 cur border-teal-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-300 duration-300 rounded-xl h-12 text-center font-semibold text-blue-800 p-2 p-auto";
  return (
    <div className="flex flex-col w-full  bg-teal-100 rounded-md h-96 p-4 justify-evenly mr-1">
      <div onClick={() => redirect("/dashboard/view")} className={link}>
        View employee details
      </div>
      <div onClick={() => redirect("/dashboard/add")} className={link}>
        Add New Employee
      </div>
      <div onClick={() => redirect("/dashboard/leave")} className={link}>
        Manage Employees Leave
      </div>
    </div>
  );
}

export default Sidebar;
