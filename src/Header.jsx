import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-100 text-black h-20 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between ">
        <h2 className="text-3xl font-bold">Full Stack App</h2>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link 
                to="/" 
                className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white "
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white "
              >
                AddBlog
              </Link>
            </li>
            <li>
              <Link 
                to="/show" 
                className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white"
              >
                Show
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
