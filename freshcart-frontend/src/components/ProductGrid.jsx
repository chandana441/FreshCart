import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        No Products Found 😔
      </h2>
    );
  }

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;