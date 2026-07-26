import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="product-card">
        <img src={product.image} alt={product.name} />

        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <h4>₹ {product.price}</h4>

        <button>Add to Cart</button>
      </div>
    </Link>
  );
}

export default ProductCard;