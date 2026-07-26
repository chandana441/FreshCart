import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productApi";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const data = await getProductById(id);
    setProduct(data);
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <h1>{product.name}</h1>

        <h3>{product.category}</h3>

        <h2>₹ {product.price}</h2>

        <p>{product.description}</p>

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;