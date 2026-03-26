// import React, { createContext, useState } from "react";

// export const StoreContext = createContext();

// export const StoreProvider = ({ children }) => {

//   const [cartItems, setCartItems] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const [showLogin, setShowLogin] = useState(false);

//   const addToCart = (product) => {
//     setCartItems((prev) => [...prev, product]);
//   };

//   const addToWishlist = (product) => {
//     setWishlistItems((prev) => [...prev, product]);
//   };

//   return (
//     <StoreContext.Provider
//       value={{
//         cartItems,
//         wishlistItems,
//         showLogin,
//         addToCart,
//         addToWishlist,
//         setShowLogin
//       }}
//     >
//       {children}
//     </StoreContext.Provider>
//   );
// };



import { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
  const addToWishlist = (product) => {
    setWishlistItems((prev) => [...prev, product]);
  };
  const removeFromWishlist = (id) => {
  setWishlistItems((prev) => prev.filter(item => item.id !== id));
};
const removeFromCart = (id) => {
  setCartItems((prev) => prev.filter(item => item.id !== id));
};


  return (
    <StoreContext.Provider
      value={{
        cartItems,
        addToCart,
        wishlistItems,
        addToWishlist,
        showLogin,
        setShowLogin,
        removeFromWishlist,
        removeFromCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

