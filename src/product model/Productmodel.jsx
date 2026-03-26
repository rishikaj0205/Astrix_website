import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import styles from "./Productmodel.module.css";

const ProductModel = () => {

  const { selectedProduct, setSelectedProduct } = useContext(StoreContext);

  if (!selectedProduct) return null;

  return (
    <div 
      className={styles.overlay}
      onClick={() => setSelectedProduct(null)}
    >
      <div 
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <span 
          className={styles.close}
          onClick={() => setSelectedProduct(null)}
        >
          ✖
        </span>

        <img 
          src={selectedProduct.image} 
          alt={selectedProduct.name} 
        />

        <h2>{selectedProduct.name}</h2>
        <p>{selectedProduct.price}</p>

        <p className={styles.desc}>
          {selectedProduct.description || "No details available"}
        </p>
      </div>
    </div>
  );
};

export default ProductModel;