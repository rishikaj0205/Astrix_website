import React, { useState, useEffect, useContext } from "react";
import styles from "./products.module.css";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const categories = ["All Products", "Men", "Women", "Kids"];

const Products = () => {

  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("All Products");

  const { addToCart, addToWishlist, setShowLogin } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/products/products/");
        setProducts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();

  }, []);

  const filteredProducts =
    activeTab === "All Products"
      ? products
      : products.filter((p) =>{
         return p.category === activeTab
        });

  const handleAddToCart = (product) => {
  if (!isLoggedIn()) {
    setShowLogin(true);
    return;
  }

  addToCart(product);
  navigate("/cart");
};
const handleAddToWishlist = (product) => {
  if (!isLoggedIn()) {
    setShowLogin(true);
    return;
  }

  addToWishlist(product);
  navigate("/wishlist");
};

const isLoggedIn = () => !!localStorage.getItem("token");
  return (
    <section className={styles.section}>

      <div className={styles.tabs}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.tab} ${activeTab === category ? styles.active : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProducts.map((item) => {
          console.log(item)
          return <div key={item.id} className={styles.card}>

            <div className={styles.imageWrapper}>
              <img src={`${item.image}`} alt={item.name} />

              <div
                className={styles.cartIcon}
                onClick={() => handleAddToCart(item)}
              >
                <FaShoppingBag />
              </div>

              <div
                className={styles.heart}
                onClick={() =>handleAddToWishlist(item)}
              >
                <FaRegHeart />
              </div>

            </div>

            <div className={styles.info}>
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>

          </div>
        })}
      </div>


    </section>
  );
};

export default Products;