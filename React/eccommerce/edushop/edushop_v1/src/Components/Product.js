import { useOutletContext } from "react-router-dom";
import TableRow from "./tablerow";

const Products = () => {

  const [data] = useOutletContext();

  return (
    <table border="1" style={{ margin: "0 auto" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>category</th>
          <th>Image</th>
          <th>rating</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item) => {
          return <TableRow item={item}></TableRow>;
        })}
      </tbody>
    </table>
  );
};

export default Products;