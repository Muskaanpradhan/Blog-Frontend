import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { idToEdit } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const obj = { name, email, message, id: idToEdit };

    fetch("https://blog-backend-a2cl.onrender.com/updateData", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result === "Data Updated") {
          navigate("/show");
        }
      });
  }

  useEffect(() => {
    if (idToEdit) {
      fetch("https://blog-backend-a2cl.onrender.com/getDataById/" + idToEdit)
        .then((response) => response.json())
        .then((result) => {
          setName(result.name);
          setEmail(result.email);
          setMessage(result.message);
        });
    }
  }, [idToEdit]);

  return (
    <div className="bg-[url('https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center h-screen flex items-center justify-center">
      <main className="backdrop-blur-lg bg-white bg-opacity-10 p-8 rounded-md shadow-2xl max-w-lg w-full">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Edit Message</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit} method="post">
          <input
            className="px-4 py-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="px-4 py-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="px-4 py-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 w-full"
          >
            Update Message
          </button>
        </form>
      </main>
    </div>
  );
}

export default Edit;
