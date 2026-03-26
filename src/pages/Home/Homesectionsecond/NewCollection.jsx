import styles from "./newcollection.module.css";
import hat from './assets/hatgirl.jpg'
import sgirl from './assets/sgirl.jpg'
import flat from './assets/flatgirl.jpg'
import { useNavigate } from "react-router-dom";

const NewCollection = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className={styles.total}>
    <div className={styles.mainheader}>
    <div className={styles.header}>
      <h3>NEW COLLECTIONS</h3>
      <p>Discover our latest arrivals crafted with modern elegance and timeless style. Each piece is designed to elevate your wardrobe with premium fabrics, refined details, and effortless sophistication.</p>
    </div>
    </div>
    <div className={styles.container}>

      <div className={styles.card}>
        <img
          src={hat}
          alt="fashion"
        />
        <h2>SOFT LEATHER JACKETS</h2>
        <p>
          Scelerisque duis aliquam qui lorem ipsum dolor amet,
          consectetur adipiscing elit.
        </p>
        <span onClick={()=>navigate("/shop")}>DISCOVER NOW</span>
      </div>

      <div className={styles.card}>
        <img
          src={sgirl}
          alt="fashion"
        />
        <h2>SOFT LEATHER JACKETS</h2>
        <p>
          Scelerisque duis aliquam qui lorem ipsum dolor amet,
          consectetur adipiscing elit.
        </p>
        <span onClick={()=>navigate('/shop')}>DISCOVER NOW</span>
      </div>

      <div className={styles.card}>
        <img
          src={flat}
          alt="fashion"
        />
        <h2>SOFT LEATHER JACKETS</h2>
        <p>
          Scelerisque duis aliquam qui lorem ipsum dolor amet,
          consectetur adipiscing elit.
        </p>
        <span onClick={()=>navigate('/shop')}>DISCOVER NOW</span>
      </div>

    </div>
    </div>
    </>
  );
};

export default NewCollection;