import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <h1 className="section-title">Shopping Cart</h1>
        <h2>Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="container">

      <h1 className="section-title">
        Shopping Cart
      </h1>

      {cartItems.map((item) => (

        <div className="cart-item" key={item.id}>

          <img
            src={item.image}
            alt={item.name}
          />

          <div className="cart-details">

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <div className="quantity">

              <button
                onClick={() => decreaseQty(item.id)}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
              >
                +
              </button>

            </div>

            <p>
              Subtotal:
              ₹{item.price * item.quantity}
            </p>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>

          </div>

        </div>

      ))}

      <h2 className="cart-total">
        Total : ₹{totalPrice}
      </h2>

      <button className="checkout-btn">
        Proceed to Checkout
      </button>

    </div>
  );
}

export default Cart;