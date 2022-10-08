import { useNavigate } from "react-router-dom";

function Logout() {
    let redirect = useNavigate()
    function toHome() {

        redirect("/")
    }
  return (
    <div onClick={toHome} className="bg-teal-100 mt-0.5transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 rounded-md text-rose-800 sm:w-2/12 p-4 mb-4 text-center sm:float-right">
      Logout
    </div>
  );
}
export default Logout;
