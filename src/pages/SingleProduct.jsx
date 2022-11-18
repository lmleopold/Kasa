import { useParams } from "react-router-dom";

function SingleProduct() {
  const params = useParams();
  console.log(params);

  return <p>Single Product</p>;
}
export default SingleProduct;
