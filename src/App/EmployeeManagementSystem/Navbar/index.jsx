import { Link } from "react-router-dom";

function NavBar() {
  const text ="font-serif font-extrabold text-xl text-blue-800"
  return (
    <ul className="container shadow-lg flex justify-around flex-row mx-auto  rounded h-14 bg-teal-50  p-4 p-auto mb-2">

      <li className={text}><Link to="">Admin</Link></li>
    </ul>
  );
}

export default NavBar;
