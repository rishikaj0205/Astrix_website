// import React from "react";
// import styles from "./newarrival.module.css";
// import { FaRegHeart,FaShoppingBag } from "react-icons/fa";
// import boy from './asset/boy.jpg'
// import men from './asset/men2.jpg'
// import women from './asset/women1.jpg'
// import girl from './asset/girl.jpg'
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { StoreContext } from "../../../context/StoreContext";

// const products = [
//   {
//     id: 1,
//     name: "DARK FLORISH ONEPIECE",
//     price: "$95.00",
//     image: boy
//   },
//   {
//     id: 2,
//     name: "BAGGY SHIRT",
//     price: "$55.00",
//     image: men
//   },
//   {
//     id: 3,
//     name: "COTTON OFF-WHITE SHIRT",
//     price: "$60.00",
//     image: women
//   },
//   {
//     id: 4,
//     name: "CROP SWEATER",
//     price: "$50.00",
//     image: girl
//   }
// ];

// const Newarrivals = () => {
// const { addToCart, addToWishlist } = useContext(StoreContext);
// const navigate = useNavigate();
//   return (
//     <section className={styles.section}>
      
//       <div className={styles.header}>
//         <h2>OUR NEW ARRIVALS</h2>
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

// export default Newarrivals;
import React, { useEffect, useState, useContext } from "react";
import styles from "./newarrival.module.css";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";
import axios from "axios";

const Newarrivals = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, addToWishlist } = useContext(StoreContext);
  const navigate = useNavigate();


  useEffect(() => {
    fetchArrivals();
  }, []);

  const fetchArrivals = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/newarrivals/arrivals/");
      setProducts(res.data.data);
    } catch (error) {
      console.error("Error fetching arrivals:", error);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>OUR NEW ARRIVALS</h2>
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

export default Newarrivals;