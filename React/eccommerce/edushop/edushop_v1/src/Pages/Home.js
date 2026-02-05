import { useOutletContext } from "react-router-dom";
import Products from "../Components/Product";

const Home = () => {
  const [data] = useOutletContext();
  console.log(data);

  return (
    <div>
      <h1>This is a Home page</h1>
      <Products></Products>
    </div>
  );
};

export default Home;