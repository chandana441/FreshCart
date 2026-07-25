import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Custom Hook
export const useCart = () => useContext(CartContext);

// Provider Component
export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  // Add Product
  const addToCart = (product) => {

    const existingItem = cartItems.find(
      item => item.id === product.id
    );

    if (existingItem) {

      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ]);

    }

  };

  // Remove Product
  const removeFromCart = (id) => {
    setCartItems(
      cartItems.filter(item => item.id !== id)
    );
  };

  // Increase Quantity
  const increaseQty = (id) => {

    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };

  // Decrease Quantity
  const decreaseQty = (id) => {

    setCartItems(
      cartItems
        .map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(item => item.quantity > 0)
    );

  };

  // Total Items
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        cartCount,
        totalPrice
      }}
    >

      {children}

    </CartContext.Provider>

  );

};