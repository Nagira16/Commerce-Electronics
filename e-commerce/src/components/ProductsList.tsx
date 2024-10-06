import { getAllProduct } from "@/actions/productAction";

const ProductsList = async () => {
  const products = await getAllProduct();
  console.log(products);

  return <div>ProductsList</div>;
};

export default ProductsList;
