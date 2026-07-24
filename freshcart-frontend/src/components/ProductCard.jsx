function ProductCard({ product }) {
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

        <button className="add-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;