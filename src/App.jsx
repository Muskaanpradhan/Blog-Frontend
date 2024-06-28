import { useEffect, useState } from "react";

const App = () => {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/Data', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setInfo(result);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  function handleSearch() {
    fetch("http://localhost:5000/search?q=" + search, {
      method: 'GET',
      headers: {
        "content-type": "application/json",
      }
    }).then((response) => response.json())
      .then((result) => {
        console.log(result);
        setInfo(result);
      });
  }

  return (
    <>
      <div className="border-2 border-black bg-[url('https://images.pexels.com/photos/459038/pexels-photo-459038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center h-screen p-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">All Blogs</h1>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="border-2 border-black p-2 rounded-lg mr-4"
          />
          <button
            onClick={handleSearch}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Search
          </button>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 ">
          {info.map(item => (
            <li className="border-2 border-black rounded-lg bg-slate-100 p-4 shadow-2xl border border-gray-200 h-64 w-80" key={item._id}>
              <p className="font-medium text-lg">Author Name: <span className="font-bold">{item.name}</span></p>
              <p className="font-medium text-lg">Title: <span className="font-bold">{item.title}</span></p>
              <p className="font-medium text-lg">Blog Content: <span className="font-bold">{item.blogContent}</span></p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
