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

    fetch("http://localhost:4000/updateData", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result === "Data Updated") {
          navigate("/show");
        }
      });
  }

  useEffect(() => {
    if (idToEdit) {
      fetch("http://localhost:4000/getDataById/" + idToEdit)
        .then((response) => response.json())
        .then((result) => {
          setName(result.name);
          setEmail(result.email);
          setMessage(result.message);
        });
    }
  }, [idToEdit]);

  return (
    <main>
      <form action="" onSubmit={handleSubmit} method="post">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <textarea
          name=""
          placeholder="Enter your message"
          id=""
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        ></textarea>
        <br />
        <button type="submit">Update Message</button>
      </form>
    </main>
  );
}

export default Edit;
