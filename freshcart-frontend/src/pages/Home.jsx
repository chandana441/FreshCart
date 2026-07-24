import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import BestSellingProducts from "../components/BestSellingProducts";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <BestSellingProducts />
      <Footer />
    </>
  );
}

export default Home;