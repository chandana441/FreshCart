function Categories() {

  const categories = [
    {
      id: 1,
      name: "Fruits",
      image: "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/bltc68b7ba7fc2156b7/665640d9f8aaeaadeabcf466/types-of-fuit-hero-1-e1559313304247.jpg?q=70&width=3840&auto=webp"
    },
    {
      id: 2,
      name: "Vegetables",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdQ3XFENYAb7dlfoqdeRRrHVgWeTnuFLlwA&s"
    },
    {
      id: 3,
      name: "Dairy",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXO2JBMVyMFljpkovaPiY9kRAvyItG1LZBg&s"
    },
    {
      id: 4,
      name: "Snacks",
      image: "https://i.etsystatic.com/29356732/r/il/34dc4c/5159352621/il_1080xN.5159352621_guwf.jpg"
    }
  ];

  return (
    <section className="container">

      <h2 className="section-title">
        Popular Categories
      </h2>

      <div className="categories">

        {categories.map((category) => (

          <div
            className="category-card"
            key={category.id}
          >
            <img
              src={category.image}
              alt={category.name}
            />

            <h3>{category.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;