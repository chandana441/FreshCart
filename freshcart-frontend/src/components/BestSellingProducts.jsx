function BestSellingProducts() {

  const products = [
    {
      id: 1,
      name: "Apple",
      price: "₹120/kg",
      image: "https://www.bbassets.com/media/uploads/p/l/40319252_3-fresho-apple-red-delicious.jpg"
    },
    {
      id: 2,
      name: "Banana",
      price: "₹60/dozen",
      image: "https://pamsdailydish.com/wp-content/uploads/2015/04/Bunch-Bananas-1.jpg"
    },
    {
      id: 3,
      name: "Milk",
      price: "₹60/ltr",
      image: "https://dodladairy.com/wp-content/uploads/2024/01/Cow-Milk.png.webp"
    }
  ];

  return (
    <section className="container">

      <h2 className="section-title">
        Best Selling Products
      </h2>

      <div className="products">

        {products.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p className="price">
              {product.price}
            </p>

            <button>
              Add To Cart
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default BestSellingProducts;