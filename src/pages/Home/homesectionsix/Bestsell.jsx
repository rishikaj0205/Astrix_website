// import React from "react";
// import styles from "./Bestsell.module.css";
// import { FaRegHeart,FaShoppingBag } from "react-icons/fa";
// import one from './images/one.jpg'
// import two from './images/two.png'
// import three from './images/three.jpg'
// import four from './images/four.jpg'
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { StoreContext } from "../../../context/StoreContext";

// const products = [
//   {
//     id: 1,
//     name: "DARK FLORISH ONEPIECE",
//     price: "$95.00",
//     image: one
//   },
//   {
//     id: 2,
//     name: "BAGGY SHIRT",
//     price: "$55.00",
//     image: three
//   },
//   {
//     id: 3,
//     name: "COTTON OFF-WHITE SHIRT",
//     price: "$60.00",
//     image: two
//   },
//   {
//     id: 4,
//     name: "CROP SWEATER",
//     price: "$50.00",
//     image: four
//   }
// ];

// const Bestsell= () => {
// const { addToCart, addToWishlist } = useContext(StoreContext);
// const navigate = useNavigate();
//   return (
//     <section className={styles.section}>
      
//       <div className={styles.header}>
//         <h2>Best Selling Items</h2>
//         <p onClick={()=>navigate("/shop")}>VIEW ALL PRODUCTS</p>
//       </div>

//       <div className={styles.grid}>
//         {products.map((item) => (
//           <div key={item.id} className={styles.card}>
            
//             <div className={styles.imageWrapper}>
//               <img src={item.image} alt={item.name} />
//               <div className={styles.cartIcon}onClick={() => {
//       addToCart(item);
//       navigate("/cart");
//     }}><FaShoppingBag /></div>
//               <div className={styles.heart} onClick={() => {
//       addToWishlist(item);
//       navigate("/wishlist");
//     }}>
//                 <FaRegHeart />
//               </div>
//             </div>

//             <div className={styles.info}>
//               <h4>{item.name}</h4>
//               <p>{item.price}</p>
//             </div>

//           </div>
//         ))}
//       </div>

//     </section>
//   );
// };

// export default Bestsell;



import React, { useEffect, useState, useContext } from "react";
import styles from "./Bestsell.module.css";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";
import axios from "axios";

const Bestsell = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, addToWishlist } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArrivals();
  }, []);

  const fetchArrivals = async () => {
    try {
      const res = await axios.get("https://astrix-backend.onrender.com/api/bestsell/best/");
      setProducts(res.data.data);
    } catch (error) {
      console.error("Error fetching best selling:", error);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Best Selling Items</h2>
        <p onClick={() => navigate("/shop")}>VIEW ALL PRODUCTS</p>
      </div>

      <div className={styles.grid}>
        {products.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.name} />

              <div
                className={styles.cartIcon}
                onClick={() => {
                  addToCart(item);
                  navigate("/cart");
                }}
              >
                <FaShoppingBag />
              </div>

              <div
                className={styles.heart}
                onClick={() => {
                  addToWishlist(item);
                  navigate("/wishlist");
                }}
              >
                <FaRegHeart />
              </div>
            </div>

            <div className={styles.info}>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsell;