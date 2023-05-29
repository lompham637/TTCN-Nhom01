import React, {createContext, useState, useEffect} from 'react';
import CartItem from '../components/CartItem';

//create context
export const CartContext = createContext();

const CartProvider = ({children}) => {
  //cart state
  const [cart, setCart] = useState([]);
  const addToCart = (product, id) => {
    const newItem = {...product, amount:1};

    //Kiem tra xem san pham da co trong gio hang hay chua
    const cartItem = cart.find((item) => {
        return item.id === id;
      });

      //Truong hop trong gio hang da co san pham vua them vao roi
      if(cartItem) {
        const newCart = [...cart].map((item) => {
          if(item.id === id) {
            return {...item, amount: cartItem.amount + 1}; 
          } else{
            return item;
          }
        });
        setCart(newCart);
      } else {
        setCart([...cart, newItem]);
      }
  };
  return (
    <CartContext.Provider value = {{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
