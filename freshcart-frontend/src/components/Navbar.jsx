import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-container">

        <Link to="/" className="logo">
          FreshCart
        </Link>

        <nav>

          <ul className="nav-links">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/categories">
                Categories
              </Link>
            </li>

            <li>
              <Link to="/about">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </nav>

        <Link
          to="/cart"
          className="cart-btn"
        >
          🛒 Cart (0)
        </Link>

      </div>

    </header>
  );
}

export default Navbar;