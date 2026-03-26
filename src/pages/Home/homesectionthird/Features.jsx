import { FaCalendarAlt, FaShoppingBag, FaGift, FaSyncAlt } from "react-icons/fa";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <div className={styles.section}>
      
      <div className={styles.card}>
        <FaCalendarAlt className={styles.icon} />
        <h3>Book An Appointment</h3>
        <p>
          At imperdiet dui accumsan sit amet
          nulla risus est ultricies quis.
        </p>
      </div>

      <div className={styles.card}>
        <FaShoppingBag className={styles.icon} />
        <h3>Pick Up In Store</h3>
        <p>
          At imperdiet dui accumsan sit amet
          nulla risus est ultricies quis.
        </p>
      </div>

      <div className={styles.card}>
        <FaGift className={styles.icon} />
        <h3>Special Packaging</h3>
        <p>
          At imperdiet dui accumsan sit amet
          nulla risus est ultricies quis.
        </p>
      </div>

      <div className={styles.card}>
        <FaSyncAlt className={styles.icon} />
        <h3>Free Global Returns</h3>
        <p>
          At imperdiet dui accumsan sit amet
          nulla risus est ultricies quis.
        </p>
      </div>

    </div>
  );
};

export default Features;