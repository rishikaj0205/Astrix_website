import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { FaRegHeart } from "react-icons/fa";
import styles from "./Wishlist.module.css";

const Wishlist = () => {

  const { wishlistItems,removeFromWishlist } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <FaRegHeart className={styles.icon}/>
        <h2>Wishlist Items</h2>
      </div>

      {wishlistItems.length === 0 ? (
        <p className={styles.empty}>No items in wishlist</p>
      ) : (
        <div className={styles.grid}>
          {wishlistItems.map((item) => (
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
      onClick={() => removeFromWishlist(item.id)}
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

export default Wishlist;