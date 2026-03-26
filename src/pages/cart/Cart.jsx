import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Cart.module.css";

const Cart = () => {

  const { cartItems,removeFromCart } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <FaShoppingCart className={styles.icon}/>
        <h2>Cart Items</h2>
      </div>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>No items in cart</p>
      ) : (
        <div className={styles.grid}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.card}>
              
              <div className={styles.imageWrapper}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className={styles.image}
                />
              </div>

              <div className={styles.details}>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <button 
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;