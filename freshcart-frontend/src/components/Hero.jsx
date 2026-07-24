function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <div className="hero-text">
          <h1>Fresh Groceries Delivered To Your Doorstep</h1>

          <p>
            Get the best quality fresh vegetables,
            fruits and daily essentials.
          </p>

          <button className="btn">
            Shop Now
          </button>
        </div>

        <img
          src="https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg"
          alt="Fresh Groceries"
        />

      </div>
    </section>
  );
}

export default Hero;