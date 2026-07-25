import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="category">
          {product.category}
        </p>

        <p className="price">
          ₹{product.price}
        </p>

        <button
          className="add-cart-btn"
          onClick={() => addToCart(product)}
        >
          🛒 Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;