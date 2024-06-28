import React, { useState } from "react";

function AddMessages() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const obj = { name, email, message };

    fetch("https://blog-backend-a2cl.onrender.com/saveData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result === "Data Submitted") {
          setResponse(true);

          // Clearing the form
          setName("");
          setEmail("");
          setMessage("");
        }
      });
  }

  return (
    <div className="bg-[url('https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center h-screen flex items-center justify-center">
      <main className="backdrop-blur-lg bg-white bg-opacity-10 p-8 rounded-md shadow-2xl max-w-lg w-full">
        {response && <h3 className="text-white text-center mb-4">Thank you for your message</h3>}
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Send a Message</h2>

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
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}

export default AddMessages;
