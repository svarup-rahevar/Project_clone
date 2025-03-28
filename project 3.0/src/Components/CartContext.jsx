import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); 
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};

