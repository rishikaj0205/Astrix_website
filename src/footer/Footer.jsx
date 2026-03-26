import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.col}>
          <h2 className={styles.logo}>Astrix</h2>
          <p className={styles.text}>
            Discover premium fashion for Men, Women, and Kids.
            Crafted with style and comfort in mind.
          </p>
        </div>

        {/* Shop */}
        <div className={styles.col}>
          <h4>Shop</h4>
          <ul>
            <li>
              <NavLink to="/men" className={styles.link}>Men</NavLink>
            </li>
            <li>
              <NavLink to="/women" className={styles.link}>Women</NavLink>
            </li>
            <li>
              <NavLink to="/kids" className={styles.link}>Kids</NavLink>
            </li>
            <li>
              <NavLink to="/accessories" className={styles.link}>Accessories</NavLink>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <NavLink to="/" className={styles.link}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/features" className={styles.link}>Cart</NavLink>
            </li>
            <li>
              <NavLink to="/features" className={styles.link}>Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={styles.link}>Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className={styles.col}>
          <h4>Follow Us</h4>
          <div className={styles.social}>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
