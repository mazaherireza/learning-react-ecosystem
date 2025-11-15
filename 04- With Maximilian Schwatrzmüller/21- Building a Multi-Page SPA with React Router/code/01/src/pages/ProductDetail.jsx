import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <>
      <h2>Product Detail</h2>
      <p>id: {id}</p>
    </>
  );
};

export default ProductDetail;
