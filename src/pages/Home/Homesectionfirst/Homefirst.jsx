
import styles from "./homefirst.module.css";
import { useNavigate } from "react-router-dom";

const Homefirst = () => {
  const navigate=useNavigate()
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <p className={styles.tagline}>Fashion Never Sleeps</p>
        <h1>NEW ARRIVALS</h1>
        <button onClick={()=>navigate("/shop")}>Shop Now</button>
      </div>
    </section>
    
  );
};

export default Homefirst;
