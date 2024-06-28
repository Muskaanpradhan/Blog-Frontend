/* eslint-disable react/prop-types */
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

function Message({ data, sno, handleDelete }) {
  return (
    <tr>
      <td>{sno}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.message}</td>
      <td>
        <Link to="" onClick={(e) => handleDelete(e, data._id)}>
          <AiFillDelete />
        </Link>
        ||
        <Link to={`/edit/${data._id}`}>
          <AiFillEdit />
        </Link>
      </td>
    </tr>
  );
}

export default Message;
