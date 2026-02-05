import { useNavigate } from "react-router-dom";

const TableRow = ({ item }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.description}</td>
      <td>{item.category}</td>
      <td>
        <img src={item.image} alt="Product" width="100" height="100" />
      </td>
      <td>{item.rating}</td>
      <td>
        <button
          onClick={() => {
            navigate(`/product/${item.id}`);
          }}
        >
          view Details
        </button>
      </td>
    </tr>
  );
};

export default TableRow;