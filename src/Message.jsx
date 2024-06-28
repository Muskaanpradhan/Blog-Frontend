/* eslint-disable react/prop-types */
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

function Message({ data, sno, handleDelete }) {
  return (
    <tr className="bg-white bg-opacity-50">
      <td className="px-4 py-2 border-b border-gray-300 text-black">{sno}</td>
      <td className="px-4 py-2 border-b border-gray-300 text-black">{data.name}</td>
      <td className="px-4 py-2 border-b border-gray-300 text-black">{data.email}</td>
      <td className="px-4 py-2 border-b border-gray-300 text-black">{data.message}</td>
      <td className="px-4 py-2 border-b border-gray-300 text-black flex space-x-2">
        <Link to="" onClick={(e) => handleDelete(e, data._id)} className="text-red-500 hover:text-red-700">
          <AiFillDelete />
        </Link>
        <span className="text-black">||</span>
        <Link to={`/edit/${data._id}`} className="text-blue-500 hover:text-blue-700">
          <AiFillEdit />
        </Link>
      </td>
    </tr>
  );
}

export default Message;
