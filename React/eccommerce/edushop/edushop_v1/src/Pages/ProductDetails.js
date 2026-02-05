import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [data] = useOutletContext();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (data && data.find) {
      const prod = data.find((i) => i.id === productId);
      setProduct(prod);
    }
  }, [productId, data]);
  console.log(product);

  return (
    <div>
      <h1>This is a Product page and id is {productId}</h1>
      <h2>Product Name</h2>
      <h2>{product?.name}</h2>
      <h2>Product Image</h2>
      <img src={product?.image} alt="" />
    </div>
  );
};

export default ProductDetails;