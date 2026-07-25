import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          FreshCart
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/categories">Categories</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Cart Button */}
        <Link to="/cart" className="cart-btn">
          🛒 Cart ({cartCount})
        </Link>

      </div>
    </header>
  );
}

export default Navbar;