import { useEffect, useState } from "react";

function ManageLeave() {
  const [leave, setLeave] = useState([]);
  const [onLeave, setOnLeave] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((res) => res.json())
      .then((data) => setLeave((leave) => data));
  }, []);

  function handleLeave(item) {
    // console.log(item)
    fetch("http://localhost:3000/leave", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => setUpdate((update) => !update));
  }

  useEffect(() => {
    fetch("http://localhost:3000/leave")
      .then((res) => res.json())
      .then((data) => setOnLeave((onLeave) => data));
  }, [update]);
  function handleEndLeave(item) {
    fetch(`http://localhost:3000/leave/${item.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUpdate((update) => !update));
  }

  const empOnLeave = onLeave.map((item) => (
    <div key={item.id} className="grid grid-cols-2 gap-x-3 text-sm font-serif">
      <span className="text-left text-sky-600">{item.full_name}</span>
      <button onClick={() => handleEndLeave(item)} className=" text-violet-900">
        end leave
      </button>
    </div>
  ));

  let list = leave.map((item, i) => (
    <tr key={i}>
      <td className="p-2">
        <div className="font-mediu text-center text-gray-800">
          <span>{item.full_name}</span>
        </div>
      </td>
      <td className="p-2">
        <div className="text-center">{item.department}</div>
      </td>
      <td className="p-2">
        <div className="flex justify-center">
          <button onClick={() => handleLeave(item)} className="text-red-500">
            Start leave
          </button>
        </div>
      </td>
    </tr>
  ));
  return (
    <div className="w-8/12 rounded shadow-md bg-teal-100 p-10 justify-center ">
      <h1 className="text-4xl text-center text-orange-400 mb-8">
        It's Leave management time😅😅🚀
      </h1>
      <div className="text-xl text-center grid grid-cols-2 gap-x-8 text-blue-800">
        <div>
          All Members
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-blue-800 rounded-md bg-gray-50">
              <tr>
                <th className="p-2">
                  <div className="font-bold text-left">Employee Name</div>
                </th>
                <th className="p-2">
                  <div className="font-bold text-left">department</div>
                </th>
                <th className="p-2">
                  <div className="font-bold text-center">Start Leave</div>
                </th>
              </tr>
            </thead>

            <tbody className="text-sm divide-y divide-gray-100">{list}</tbody>
          </table>
        </div>

        <div>
          <p className="text-center">members on leave</p>
          <ol>{empOnLeave}</ol>
        </div>
      </div>
    </div>
  );
}
export default ManageLeave;
