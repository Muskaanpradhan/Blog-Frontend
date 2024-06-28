import { useEffect, useState } from "react";
import Message from "./Message";
import { useNavigate } from "react-router-dom";

function Show() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://blog-backend-a2cl.onrender.com/showData");
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  function handleDelete(e, id) {
    fetch("https://blog-backend-a2cl.onrender.com/deleteData", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ idToDelete: id }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result === "Data Deleted") window.location.href = "http://localhost:5173/show";
      });
  }

  let sno = 1;

  return (
    <div className="bg-[url('https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center h-screen flex flex-col items-center justify-center p-8">
      <main className="backdrop-blur-lg bg-white bg-opacity-10 p-8 rounded-md shadow-2xl max-w-4xl w-full">
        <h3 className="text-4xl font-bold mb-8 text-center text-white">Saved Messages</h3>
        <div className="overflow-auto rounded-lg shadow">
          <table className="min-w-full bg-white bg-opacity-70">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-tight text-black">S.No</th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-tight text-black">Name</th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-tight text-black">Email</th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-tight text-black">Message</th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-tight text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((dt, index) => (
                  <Message
                    key={index}
                    data={dt}
                    sno={sno++}
                    handleDelete={handleDelete}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-2 border-b border-gray-300 text-center text-black">No Messages to Show</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Show;
