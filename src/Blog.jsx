import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [image, setImage] = useState("")

  const formData=new FormData()

formData.append("name",name)
formData.append("title",title)
formData.append("blogContent",blogContent)
formData.append("image",image)




  function handleSubmit(e) {
    // const obj = { name, title, blogContent };

    e.preventDefault();
    fetch("https://blog-backend-a2cl.onrender.com/sendBlog", {
      method: "POST",
      // headers: {
      //   "content-type": "application/json",
      // },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }

  return (
    <div className="bg-[url('https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center h-screen flex items-center justify-center">
      <form
        className=" backdrop-blur-lg bg-white bg-opacity-10 p-8 rounded-md shadow-2xl    max-w-lg w-full"
        onSubmit={handleSubmit}
        method="post"
        encType="multipart/form-data"

      >
        <h1 className="text-4xl font-bold mb-8 text-center">Submit Your Blog</h1>
        
        <label className="block text-xl font-bold mb-2">Name</label>
        <input
          className="px-4 py-3 mb-4 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block text-xl font-bold mb-2">Title</label>
        <input
          className="px-4 py-3 mb-4 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter the title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="block text-xl font-bold mb-2">Blog Content</label>
        <textarea
          className="px-4 py-3 mb-4 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          placeholder="Enter your blog content"
          onChange={(e) => setBlogContent(e.target.value)}
        /><br/>
        <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} ></input>

        <button
          className="btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
